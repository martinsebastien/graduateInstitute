<?php
function graduateinstitute_customize_register($wp_customize){

    $wp_customize->remove_section('static_front_page');
    $wp_customize->remove_section('title_tagline');
    $wp_customize->remove_section('custom_css');
    $wp_customize->remove_section('colors');
    $wp_customize->remove_panel('nav_menus');

    $wp_customize->add_section('graduateinstitute_theme_settings', [
        'title'    => 'Theme',
        'description' => '',
        'priority' => 120,
    ]);

    $wp_customize->add_setting('graduateinstitute_theme_options[background]', array(
        'default'           => '',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
    ));

    $wp_customize->add_control( new WP_Customize_Image_Control($wp_customize, 'image_upload_test', array(
        'label'    => 'Background image',
        'section'  => 'graduateinstitute_theme_settings',
        'settings' => 'graduateinstitute_theme_options[background]',
    )));


}

add_action('customize_register', 'graduateinstitute_customize_register', 20);
