<?php
/**
 * Plugin Name: Blockify Tabs
 * Plugin URI:  https://blockifywp.com/blocks/tabs
 * Description: Lightweight, customizable tabs block for WordPress.
 * Author:      Blockify
 * Author URI:  https://blockifywp.com/
 * Version:     0.0.1
 * License:     GPLv2-or-Later
 * Text Domain: blockify
 */

namespace Blockify\Tabs;

use DOMElement;
use DomXPath;
use function add_action;
use function add_filter;
use function register_block_type;

const NS = __NAMESPACE__ . '\\';
const DS = DIRECTORY_SEPARATOR;

add_action( 'init', NS . 'register' );
/**
 * Registers the block.
 *
 * @since 0.0.1
 *
 * @since 1.0.0
 *
 * @return void
 */
function register() {
	register_block_type( __DIR__ . '/build' );
}

add_filter( 'render_block_blockify/tabs', NS . 'render_tabs_block', 10, 2 );
/**
 * Modifies front end HTML output of block.
 *
 * @since 0.0.2
 *
 * @param string $content
 * @param array  $block
 *
 * @return string
 */
function render_tabs_block( string $content, array $block ): string {

	$dom          = dom( $content );
	$finder       = new DomXPath( $dom );
	$tab_contents = $finder->query( "//*[contains(concat(' ', normalize-space(@class), ' '), 'blockify-tab-content')]" );
	$tab_titles   = $finder->query( "//*[contains(concat(' ', normalize-space(@class), ' '), 'blockify-tab-title')]" );
	$nav          = $dom->createElement( 'div' );
	$nav->setAttribute( 'class', 'blockify-tabs-nav' );

	/** @var DOMElement $container */
	$container = $dom->getElementsByTagName( 'div' )->item( 0 );
	$styles    = css_string_to_array( $container->getAttribute( 'style' ) );

	unset( $styles['padding'] );
	unset( $styles['padding-top'] );
	unset( $styles['padding-right'] );
	unset( $styles['padding-bottom'] );
	unset( $styles['padding-left'] );

	// TODO: Apply styles.
	//$container->setAttribute( 'style', css_rules_to_string( $styles ) );

	foreach ( $tab_contents as $tab_content ) {
		/**
		 * @var $tab DOMElement
		 */
		$tab = $tab_content->parentNode;

		foreach ( $tab_content->childNodes as $child ) {
			$tab->insertBefore( $child->cloneNode( true ), $tab_content );
		}

		$tab->removeChild( $tab_content );
		$tab->setAttribute( 'class', $tab->getAttribute( 'class' ) . ' blockify-tab-content' );
	}

	/** @var DOMElement $tabTitle */
	foreach ( $tab_titles as $tabTitle ) {
		$nav->appendChild( $tabTitle );
	}

	$container->insertBefore( $nav, $container->firstChild );

	return $dom->saveHTML();
}


use function defined;
use function libxml_clear_errors;
use function libxml_use_internal_errors;
use function mb_convert_encoding;
use DOMDocument;

/**
 * Returns a formatted DOMDocument object from a given string.
 *
 * @since 0.0.2
 *
 * @param string $html
 *
 * @return string
 */
function dom( string $html ): DOMDocument {
	$dom = new DOMDocument();

	if ( ! $html ) {
		return $dom;
	}

	$libxml_previous_state   = libxml_use_internal_errors( true );
	$dom->preserveWhiteSpace = true;

	if ( defined( 'LIBXML_HTML_NOIMPLIED' ) && defined( 'LIBXML_HTML_NODEFDTD' ) ) {
		$options = LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD;
	} else if ( defined( 'LIBXML_HTML_NOIMPLIED' ) ) {
		$options = LIBXML_HTML_NOIMPLIED;
	} else if ( defined( 'LIBXML_HTML_NODEFDTD' ) ) {
		$options = LIBXML_HTML_NODEFDTD;
	} else {
		$options = 0;
	}

	$dom->loadHTML( mb_convert_encoding( $html, 'HTML-ENTITIES', 'UTF-8' ), $options );

	$dom->formatOutput = true;

	libxml_clear_errors();
	libxml_use_internal_errors( $libxml_previous_state );

	return $dom;
}
