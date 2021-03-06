import React from 'react';
import { CCard,CCardBody,CCardGroup,CCardHeader,CCardLink,CCardText,CCardTitle,CCardSubtitle,CListGroup,CListGroupItem,CButton     } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import {getFile} from '@inrupt/solid-client';
import {fetch} from '@inrupt/solid-client-authn-browser';
import 'bootstrap/dist/css/bootstrap.min.css'

 const saveFile = async (urlList) => {
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


export default Card;
