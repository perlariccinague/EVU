<?php
return array(
    'label' => array('Bäume', 'Meine Beschreibung...'),
    'types' => array('content', 'module'),
    'contentCategory' => 'texts',
    'moduleCategory' => 'miscellaneous',
    'beTemplate' => 'be_wildcard',
    'standardFields' => array('headline', 'cssID'),
    'wrapper' => array(
        'type' => 'none',
    ),
    'fields' => array(
        'text' => array(
            'label' => array('Title', 'Beschreibung...'),
            'inputType' => 'text',
        ),
        'description' => array(
            'label' => array('Teaser', 'Beschreibung...'),
            'eval' => array('rte' => 'tinyMCE'),
            'inputType' => 'textarea',
        ),
        'number_of_trees' => array(
            'label' => array('Anzahl der Gepflanzte Bäume'),
            'inputType' => 'text',
        ),
    ),
);




