/**
 * Copyright 2021 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import React, {useRef, useState, useEffect} from 'react';
import { useSession } from "@inrupt/solid-ui-react";
import { Button } from "@inrupt/prism-react-components";
import axios from 'axios'
import DropdownTreeSelect from 'react-dropdown-tree-select';
import {CRow, CCol} from '@coreui/react';
import {getFile} from '@inrupt/solid-client';
import {fetch} from '@inrupt/solid-client-authn-browser';
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import personalData  from '../resources/personaldata.json';
import purposesData from '../resources/purposes.json';
import Card from '../components/resourceCard/resourceCard.js'

async function saveFile () {
  const fileURL =   "https://pod.inrupt.com/ricardomld/private/Holamundo.txt";
 const filename = fileURL.substring(fileURL.lastIndexOf("/") + 1);
 const file = await getFile(
         fileURL,               // File in Pod to Read
         { fetch: fetch }       // fetch from authenticated session
 );
 if (window.navigator.msSaveOrOpenBlob) {
   window.navigator.msSaveOrOpenBlob(file, filename);
 } else {
   const a = document.createElement('a');
   document.body.appendChild(a);
   const url = window.URL.createObjectURL(file);
   a.href = url;
   a.download = filename;
   a.click();
   setTimeout(() => {
     window.URL.revokeObjectURL(url);
     document.body.removeChild(a);
   }, 0)
 }
}

const CardList = ({ resourceCards }) => {
  const cardsArray = resourceCards.map(resourceCard => (
    <div style={{minWidth:"200px"}}>
    <a onClick={saveFile}>
    <Card
      name={resourceCard.name}
      url={resourceCard.uri}
      categories={resourceCard.categories}
      policies={resourceCard.policies}
      recipients={resourceCard.recipients}
      duration={resourceCard.duration}
    />
    </a>
    </div>
  ));

  return (
    <div className="cardlist" style={{display:'flex',flexGrow:'1',flexShrink:"1",flexBasis:"100%" ,justifyContent:"space-around", flexWrap:"wrap", flexDirection:"row", flexGrow: "1", alignContent:"stretch"}}>
      {cardsArray}
    </div>
  );
};

export default function Home() {
  const { session } = useSession();
  const queryClient = new QueryClient();
  const [query, setQuery] = useState(false);
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);
  const [getResult, setGetResult] = useState(null);
  const [getResultContent, setGetResultContent] = useState(null);
  const [webId, setWebId] = useState();
  const [url,setUrl] = useState("");
  let selectedPUR = [];
  let selectedPD = [];



  const callAPI = () => {
        setQuery(true);
  }
  const goBack = () => {
        setQuery(false);
        setGetResult(null);

  }

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const {isLoading: isLoadingAll, refetch: getAll } = useQuery(
    "getQueryAll",
    async () => {
      return await axios({
        method: 'get',
        url: url,
        headers : {webID: webId}
      });
    },
    {
          enabled: false,
          onSuccess: async (res) => {
            let result = {
              status: res.status + "-" + res.statusText,
              headers: res.headers,
              data: res.data,
            };
            result = fortmatResponse(res);
            setGetResult(res.data);
          },
          onError: (err) => {
            setGetResult(fortmatResponse(err.response?.data || err));
          },
        }
      );
      useEffect(() => {
        if (isLoadingAll) setGetResult("loading...");
      }, [isLoadingAll]);

  const getQueryAll = async () => {
    try {
      await setWebId(session.info.webId)
      var  uri = "http://localhost:8080/api?";
      if(selectedPD.length == 0){
        uri += "catPData=0&";
      }else{
        for (var i = 0; i < selectedPD.length;i++){
          uri += "catPData="+selectedPD[i]+"&";
        }
      }
      if(selectedPUR.length == 0){
        uri += "purPData=0";
      }else{
        for (var j = 0; j < selectedPUR.length;j++){
          if(j == selectedPUR.length){
            uri += "purPData="+selectedPUR[j];
          }
          uri += "purPData="+selectedPUR[j]+"&";
        }
      }
        await setUrl(uri);

    } catch (err) {
      setGetResult(fortmatResponse(err));
    }
  }

  useEffect(() => {
   getAll(); // This will always use latest value of uri
  }, [url]);

  const {isLoading: isLoadingFile, refetch: getOneFile } = useQuery(
    "getQueryFile",
    async () => {
      return await axios({
        method: 'get',
        url: 'http://localhost:8080/api/https%3A%2F%2Fpod.inrupt.com%2Fricardomld%2Fpublic%2Ffotosasus001.jpg ',
        responseType: 'blob',
        headers : {webID: 'https://pod.inrupt.com/ricardomld/profile/card#me'}
      });
    },
    {
          enabled: false,
          onSuccess: async (res) => {
            let result = {
              status: res.status + "-" + res.statusText,
              headers: res.headers,
              data: res.data,
            };
            result = fortmatResponse(res);
          //  const blob = new Blob([res.data]);
            //const text = await (blob).text();
            //const url= window.URL.createObjectURL(blob);
            //const downloadLink = React.createElement('a', { download: 'filename.csv', href: url}, 'download')
            //saveFile(blob,"hello.png");

            setGetResult(fortmatResponse(res.data));
            //setGetResultContent(blob);

          },
          onError: (err) => {
            setGetResult(fortmatResponse(err.response?.data || err));
          },
        }
      );
      useEffect(() => {
        if (isLoadingFile) setGetResult("loading...");
      }, [isLoadingFile]);

  const getQueryFile = async () => {
    try {
      getOneFile();
    } catch (err) {
      setGetResult(fortmatResponse(err));
    }
  }

  const assignObjectPaths = (obj, stack) => {
    Object.keys(obj).forEach(k => {
      const node = obj[k];
      if (typeof node === "object") {
        node.path = stack ? `${stack}.${k}` : k;
        assignObjectPaths(node, node.path);
      }
    });
  };

  assignObjectPaths(personalData);
  assignObjectPaths(purposesData);

  const handlePersonalData = (currentNode, selectedNodes) => {
    selectedPD = [];
    for (var i = 0; i < selectedNodes.length; i++) {
      //var value = selectedNodes[i].value;
      var label = selectedNodes[i].label;
      selectedPD.push(label);
    }
    console.log(selectedPD);
  };


  const handlePurposes = (currentNode, selectedNodes) => {
    selectedPUR = [];
    for (var i = 0; i < selectedNodes.length; i++) {
      //var value = selectedNodes[i].value;
      var label = selectedNodes[i].label;
      selectedPUR.push(label);
    }
    console.log(selectedPD);
  };

  return (
    <div>
    { !session.info.isLoggedIn && (
      <div className="contain">
            <p>You are not logged in yet</p>
          </div>

    )}
    { session.info.isLoggedIn  && !query && (

      <div>


    <div className="">
    <p>Here you must select the categories of data you want to request:</p>
    <div>
    <DropdownTreeSelect data={personalData}   onChange={handlePersonalData} className="tree-select" />

    </div>
    <div clasName = "">

    </div>
    <p>Here you must select the purposes of data you want to request:</p>
    <DropdownTreeSelect data={purposesData}   onChange={handlePurposes} className="tree-select" />


          <Button style= {{"margin-top":"10px","margin-right": "0"}} variant="small" value="permission" onClick={callAPI} >Make new GDPR petition.</Button>

    </div>
      </div>
    )}
    { session.info.isLoggedIn && query && (
      <div className="contain">
      <div className="form">
      <p>Here you must select the categories of data you want to request:</p>
      <DropdownTreeSelect data={personalData}   onChange={handlePersonalData} className="tree-select" />

      <p>Here you must select the purposes of data you want to request:</p>
      <DropdownTreeSelect data={purposesData}   onChange={handlePurposes} className="tree-select" />


                <Button style= {{"margin-top":"10px","margin-right": "0"}} variant="small"  onClick={getQueryAll} >Make new GDPR petition.</Button>
                <Button style= {{"margin-top":"10px","margin-right": "0"}} variant="small"  onClick={goBack} >Go Back.</Button>

      </div>
      <div className="form2">

      {getResult && (
            <div >
            <pre>{url}</pre>
            <pre>{webId}</pre>
            {JSON.stringify(getResult.processed) == "false" && (<pre>{"The data is not currently being processed."}</pre>)  }
            {JSON.stringify(getResult.processed) == "true" && (<pre>{"The data is currently being processed."}</pre>)  }
            {getResult.format &&(
              <>
                <pre>{"The detailed description of the dataSubjectRights is: " +JSON.stringify(getResult.format.dataSubjectRights)}</pre>
                <pre>{"The safeguards in case of transfer to a third country are: " + JSON.stringify(getResult.format.safeguards)}</pre>
                <CardList resourceCards ={getResult.format.resource}></CardList>
              </>
              )

            }

            </div>
          )}
      </div>
      </div>
    )}
    </div>
  );
}
