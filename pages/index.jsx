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
import React, {useRef, useState, useEffect} from "react";
import { useSession } from "@inrupt/solid-ui-react";
import { Button } from "@inrupt/prism-react-components";
import axios from 'axios'
import DropdownTreeSelect from 'react-dropdown-tree-select';
import {CRow, CCol} from '@coreui/react';

import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import personalData  from '../resources/personaldata.json';
import purposesData from '../resources/purposes.json';
import { CCard,CCardBody,CCardGroup,CCardHeader,CCardLink,CCardText,CCardTitle,CCardSubtitle,CListGroup,CListGroupItem,CButton     } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import {getFile} from '@inrupt/solid-client';
import {fetch} from '@inrupt/solid-client-authn-browser';
import 'bootstrap/dist/css/bootstrap.min.css'



var saveFile;

const Card = ({name, urlList, categories, policies,recipients, duration}) =>{


  return(
      <CCard
      color="light"


      style={{"maxWidth": '300px'},{ "padding": 30 },{"margin-bottom": 20}}


      >

        <CCardHeader>{name}</CCardHeader>

        <CCardBody>

          <CCardTitle>The category of the file is: {categories}</CCardTitle>

          <CCardText>The recipients are: {recipients}</CCardText>
          <CCardText>The duration is: {duration}</CCardText>
          <CCardText>The policies are: </CCardText>
          </CCardBody>

          {policies.map(({ polName, purpose, action }) => (
            <>
            <CCardBody>
              <CCardSubtitle><b>Name: {polName}</b></CCardSubtitle>
            </CCardBody>
            <CListGroup flush>
            {purpose.map((item, i) =>
              <>
              <CListGroupItem>{item.toString()} - {action.toString()}</CListGroupItem>
              </>
            )}
            </CListGroup>
            </>
          ))}

        <CCardBody>

        <CButton onClick={()=>saveFile(urlList)}>Download the folder contents.</CButton>

        </CCardBody>

      </CCard>

  );

}

const CardList = ({ resourceCards }) => {
  const cardsArray = resourceCards.map(resourceCard => (
    <div style={{minWidth:"200px"}}>
    <Card
      name={resourceCard.name}
      urlList={resourceCard.uri}
      categories={resourceCard.categories}
      policies={resourceCard.policies}
      recipients={resourceCard.recipients}
      duration={resourceCard.duration}
    />
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
  const [getResult, setGetResult] = useState(null);
  const [getResultContent, setGetResultContent] = useState(null);
  const [webId, setWebId] = useState();
  const [url,setUrl] = useState("");
  const [error, setError] = useState(false);
  let selectedPUR = [];
  let selectedPD = [];


   saveFile = async (urlList) => {
   for(var i = 0; i<urlList.length;i++){
     const fileURL = urlList[i].toString();
     const filename = fileURL.substring(fileURL.lastIndexOf("/") + 1);
     const file = await getFile(
             fileURL,               // File in Pod to Read
             { fetch: session.fetch }       // fetch from authenticated session
     );
     try {


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
   } catch (err) {
   console.log(err);
   }
   }

 }

  const callAPI = () => {
         setQuery(true);
        setUrl("");
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
            setError(false);
            setGetResult(res.data);
          },
          onError: (err) => {
            setError(true);
            setGetResult(fortmatResponse(err.response?.data || err));
          },
        }
      );
      useEffect(() => {
        if (isLoadingAll) setGetResult("loading...");
      }, [isLoadingAll]);

  var  uri = "http://localhost:8000/getFiles?";

  const getQueryAll = async () => {
    try {
      await setWebId(session.info.webId)
      if(selectedPD.length == 0){
        uri += "catPData[]=0&";
      }else{
        for (var i = 0; i < selectedPD.length;i++){
          uri += "catPData[]="+selectedPD[i]+"&";
        }
      }
      if(selectedPUR.length == 0){
        uri += "purPData[]=0";
      }else{
        for (var j = 0; j < selectedPUR.length;j++){
          if(j == selectedPUR.length -1){
            uri += "purPData[]="+selectedPUR[j];
          }else{
            uri += "purPData[]="+selectedPUR[j]+"&";
          }

        }
      }
        await setUrl(uri);

    } catch (err) {
      setGetResult(fortmatResponse(err));
    }
    uri = "http://localhost:8000/api?";

  }

  useEffect(() => {
    if(url != uri){
      getAll(); // This will always use latest value of uri

    }
  }, [url]);



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

      {getResult && !error && (
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
        {getResult && error && (
                <div >
                  <pre>{getResult}</pre>
          </div>
        )}
      </div>
      </div>
    )}
    </div>
  );
}
