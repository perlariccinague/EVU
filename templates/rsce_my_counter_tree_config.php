<?php
return array(
    'label' => array('Anzahl der Bäume', 'Meine Beschreibung...'),
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
            'label' => array('Standort', 'Beschreibung...'),
            'inputType' => 'text',
        ),
        'number_of_trees' => array(
            'label' => array('Anzahl der Gepflanzte Bäume'),
            'inputType' => 'text',
        ),
    ),
);




