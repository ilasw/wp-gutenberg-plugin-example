<?php

/*
Plugin Name: TW Gutenberg Block Sample
*/

function tw_register_block()
{
    wp_register_script(
        'tw-gutenberg-block-js',
        plugins_url('build/index.js', __FILE__),
        ['wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n', 'wp-components']
    );

    register_block_type('tw/sample-gutenberg-block');
    register_block_type('tw/text-gutenberg-block');
    register_block_type('tw/media-gutenberg-block');
    register_block_type('tw/addable-gutenberg-block');
    register_block_type('tw/dynamic-gutenberg-block', array(
        'render_callback' => 'tw_dynamic_render_callback'
    ));
}

add_action('init', 'tw_register_block');

function tw_gutenberg_enqueue()
{
    wp_enqueue_script('tw-gutenberg-block-js');
}

add_action('enqueue_block_editor_assets', 'tw_gutenberg_enqueue');

function tw_gutenberg_stylesheet()
{
    wp_enqueue_style('tw-gutenberg-block-style', plugins_url('build/style.css', __FILE__));
}

add_action('enqueue_block_assets', 'tw_gutenberg_stylesheet');


function tw_dynamic_render_callback($attributes, $content)
{
    $recent_posts = wp_get_recent_posts(array(
        'numberposts' => 1,
        'post_status' => 'publish',
    ));

    if (count($recent_posts) === 0) {
        return 'No posts';
    }

    $post = $recent_posts[0];
    $post_id = $post['ID'];

    return sprintf(
        '<a class="wp-block-tw-latest-post" href="%1$s">%2$s</a>',
        esc_url(get_permalink($post_id)),
        esc_html(get_the_title($post_id))
    );
}