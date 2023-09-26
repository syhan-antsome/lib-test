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
        "ntas": {
          "name": "DNS covert channel"
        },
        "process": {
          "t1": [{
            "name": "dfwf"
          },
          {
            "name": "rhfdg"
          }
          ],
          "t2": [{
            "name": "rtdfag"
          }],
          "t3": [{
            "name": "nrefgerfg"
          }],
          "t4": [{
            "name": "nrefgerfg"
          }],
          "t5": [{
            "name": "nrefgerfg"
          },{
            "name": "nrefgerfg"
          },{
            "name": "nrefgerfg"
          },{
            "name": "nrefgerfg"
          }]
        },
        "file": {
          "t1": [],
          "t2": [{
            "name": "y5h5rtf"
          },{
            "name": "y5h5rtf"
          }],
          "t3": [],
          "t4": [{
            "name": "y5h5rtf"
          }],
          "t5": []
        },
        "registry": {
          "t1": [{
            "name": "rth5yhaegr"
          },{
            "name": "rth5yhaegr"
          },{
            "name": "rth5yhaegr"
          }],
          "t2": [],
          "t3": [{
            "name": "rth5yhaegr"
          },{
            "name": "rth5yhaegr"
          },{
            "name": "rth5yhaegr"
          },{
            "name": "rth5yhaegr"
          },{
            "name": "rth5yhaegr"
          },{
            "name": "rth5yhaegr"
          },{
            "name": "rth5yhaegr"
          }],
          "t4": [{
            "name": "rth5yhaegr"
          }],
          "t5": [{
            "name": "rth5yhaegr"
          }]
        }
      }} />


    </div>
  );
}

export default App;
