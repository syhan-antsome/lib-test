import logo from './logo.svg';
import './App.css';
import { Button, DetectRelGraph, XTasRelGraph } from '@syhan-antsome/ant-component';

function App() {
  return (
    <div className="App">
      <Button label="this is my button home3245323" />

      <br /><br />

      <DetectRelGraph nodeData={{
        mainIp: "123.112.33.57",
        detect: {
          inside: [{
            nodeIp: "211.11.22.33",
            inout: "OUT"
          }],
          outside: [{
            nodeIp: "211.11.22.33",
            inout: "IN"
          }]
        },
        result: {
          inside: [{
            nodeIp: "111.11.22.999",
            inout: "IN"
          }, {
            nodeIp: "111.11.22.22",
            inout: "OUT"
          }, {
            nodeIp: "111.11.22.33",
            inout: "IN"
          }, {
            nodeIp: "111.11.22.33",
            inout: "IN"
          }],
          outside: [{
            nodeIp: "211.11.22.11",
            inout: "IN"
          }, {
            nodeIp: "211.11.22.22",
            inout: "IN"
          }, {
            nodeIp: "211.11.22.33",
            inout: "OUT"
          }, {
            nodeIp: "211.11.22.44",
            inout: "OUT"
          }, {
            nodeIp: "211.11.22.55",
            inout: "IN"
          }]
        }
      }} />

      <br /><br />

      <XTasRelGraph nodeData={{
            "registry": {
                "t4": [
                    {
                        "name": "jergrg"
                    },
                    {
                        "name": "dfrhteher"
                    }
                ],
                "t2": [
                    {
                        "name": "er3451435"
                    }
                ]
            },
            "process": {
                "t5": [
                    {
                        "name": "jergrg"
                    },
                    {
                        "name": "dfrhteher"
                    }
                ],
                "t1": [
                    {
                        "name": "er3451435"
                    }
                ]
            },
            "file": {
                "t5": [
                    {
                        "name": "jergrg"
                    },
                    {
                        "name": "dfrhteher"
                    }
                ],
                "t3": [
                    {
                        "name": "er3451435"
                    }
                ]
            },
            "ntas": {
                "name": "dsafgasdg"
            }
        }} />


    </div>
  );
}

export default App;
