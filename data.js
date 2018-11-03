var svgData = {
    elements: [
        {
            "id": "startEvent1",
            "name": "",
            "x": 100.00000000000001,
            "y": 90.00000000000001,
            "width": 29.999999999999986,
            "height": 30,
            "type": "StartEvent"
        },
        {
            "id": "sid-F8B7F35D-645C-47FA-80FC-83177C6BCB8F",
            "name": "a",
            "x": 165.00000000000003,
            "y": 60.00000000000001,
            "width": 99.99999999999997,
            "height": 80,
            "type": "UserTask"
        },
        {
            "id": "sid-6D01890E-AF8B-4705-AE9B-E388472B5538",
            "name": "b",
            "x": 315.0000000000001,
            "y": 60.00000000000001,
            "width": 100,
            "height": 80,
            "type": "UserTask"
        },
        {
            "id": "sid-2E5CB821-596A-4618-A3AC-E1169B00AE0B",
            "name": "c",
            "x": 450.00000000000006,
            "y": 60.00000000000001,
            "width": 99.99999999999994,
            "height": 80,
            "type": "UserTask"
        },
        {
            "id": "sid-23AC89B4-5485-4A5F-9904-285A1C8DDAAE",
            "name": "",
            "x": 610,
            "y": 91,
            "width": 28,
            "height": 28,
            "type": "EndEvent"
        }
    ],
    flows: [
        {
            "id": "sid-2CA7072E-3DAB-431F-8BEA-C9C10134F196",
            "type": "sequenceFlow",
            "sourceRef": "startEvent1",
            "targetRef": "sid-F8B7F35D-645C-47FA-80FC-83177C6BCB8F",
            "waypoints": [
                {
                    "x": 129.98128508316768,
                    "y": 104.25093574584163
                },
                {
                    "x": 165.00000000000003,
                    "y": 102.5
                }
            ]
        },
        {
            "id": "sid-42CDB48A-EB73-41A0-B088-FB4A30A261DE",
            "type": "sequenceFlow",
            "sourceRef": "sid-F8B7F35D-645C-47FA-80FC-83177C6BCB8F",
            "targetRef": "sid-6D01890E-AF8B-4705-AE9B-E388472B5538",
            "waypoints": [
                {
                    "x": 265,
                    "y": 100
                },
                {
                    "x": 315.0000000000001,
                    "y": 100
                }
            ]
        },
        {
            "id": "sid-3E4B2D7E-D174-44FF-904E-E5D90A0BFB4F",
            "type": "sequenceFlow",
            "sourceRef": "sid-6D01890E-AF8B-4705-AE9B-E388472B5538",
            "targetRef": "sid-2E5CB821-596A-4618-A3AC-E1169B00AE0B",
            "waypoints": [
                {
                    "x": 415.0000000000001,
                    "y": 100
                },
                {
                    "x": 450.00000000000006,
                    "y": 100
                }
            ]
        },
        {
            "id": "sid-6EBA3755-733C-49D6-B28C-6F9EB47DD4A5",
            "type": "sequenceFlow",
            "sourceRef": "sid-2E5CB821-596A-4618-A3AC-E1169B00AE0B",
            "targetRef": "sid-23AC89B4-5485-4A5F-9904-285A1C8DDAAE",
            "waypoints": [
                {
                    "x": 550,
                    "y": 100
                },
                {
                    "x": 580,
                    "y": 100
                },
                {
                    "x": 580,
                    "y": 105
                },
                {
                    "x": 610,
                    "y": 105
                }
            ]
        }
    ],
    diagramBeginX: 115,
    diagramBeginY: 60.00000000000001,
    diagramWidth: 638,
    diagramHeight: 14
};