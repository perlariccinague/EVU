<?php

return array(
    'label' => array('Slider', 'Meine Beschreibung...'),
    'types' => array('content', 'module'),
    'contentCategory' => 'texts',
    'moduleCategory' => 'miscellaneous',
    'beTemplate' => 'be_wildcard',
    'standardFields' => array('headline', 'cssID'),
    'wrapper' => array(
        'type' => 'none',
    ),
    'fields' => array(
        'slide' => array(
            'inputType' => 'list',
            'label' => array('Tabs', 'Rechts auf "Neues Element" klicken'),
            'fields' => array(
                'image' => array(
                    'label' => array('Bild', 'Beschreibung...'),
                    'eval' => array('filesOnly' => true),
                    'inputType' => 'fileTree'
                ),
                'caption' => array(
                    'label' => array('Unterschrift ', 'Beschreibung...'),
                    'inputType' => 'text',
                ),
                'caption_text' => array(
                    'label' => array('Unterschrift Teaser', 'Beschreibung...'),
                    'inputType' => 'text',
                )
            )
        )
    )
);





