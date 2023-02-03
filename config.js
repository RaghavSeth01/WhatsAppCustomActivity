﻿define([], function () {
    return {
        "workflowApiVersion": "1.1",
        "metaData": {
            "icon": "images/icon.png",
            
            "category": "message"
        },
        "type": "REST",
        "lang": {
            "en-US": {
                "name": "Devs United Custom Activity",
                "description": "Devs United Custom Activity"
            }
        },
        "arguments": {
            "execute": {
                "inArguments": [
                   
                ],
                "outArguments": [],
                "url": "https://webinarca.devsutd.com/CustomActivity/execute",
                "verb": "POST",
                "body": "",
                "header": "",
                "format": "json",
                "useJwt": false,
                "timeout": 10000
            }
        },
        "configurationArguments": {
            "applicationExtensionKey": "e58b9c43-63a5-4446-bdcf-095ef0aaed50",
            "save": {
                "url": "https://webinarca.devsutd.com/CustomActivity/save",
                "verb": "POST",
                "useJwt": true
            },
            "publish": {
                "url": "https://webinarca.devsutd.com/CustomActivity/publish",
                "verb": "POST",
                "useJwt": true
            },
            "stop": {
                "url": "https://webinarca.devsutd.com/CustomActivity/stop",
                "verb": "POST",
                "useJwt": true
            },
            "validate": {
                "url": "https://webinarca.devsutd.com/CustomActivity/validate",
                "verb": "POST",
                "useJwt": true
            }
        },
        "wizardSteps": [
          { "label": "Configuration", "key": "step1" }
        ],
        outcomes: [
            {
                arguments: {
                    branchResult: 'sent',
                },
                metaData: {
                    label: 'Sent',
                },
            },
            {
                arguments: {
                    branchResult: 'notsent',
                },
                metaData: {
                    label: 'Not Sent',
                },
            }
        ],
        "userInterfaces": {
            "configModal": {
                "height": 450,
                "width": 650,
                "fullscreen": false
            }
        },
        "schema": {
            "arguments": {
                "execute": {
                    "inArguments": [],
                    "outArguments": []
                }
            }
        }
    };
});