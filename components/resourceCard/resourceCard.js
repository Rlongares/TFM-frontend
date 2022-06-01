import React from 'react';
import { CCard,CCardBody,CCardGroup,CCardHeader,CCardLink,CCardText,CCardTitle,CCardSubtitle,CListGroup,CListGroupItem,CButton     } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import {getFile} from '@inrupt/solid-client';

import 'bootstrap/dist/css/bootstrap.min.css'

const saveFile = async (uri) => {
  const fileURL = uri.toString();
  const filename = fileURL.substring(fileURL.lastIndexOf("/") + 1);
  const file = await getFile(
          fileURL,               // File in Pod to Read
          { fetch: fetch }       // fetch from authenticated session
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

const Card = ({name, url, categories, policies,recipients, duration}) =>{


  return(
      <CCard
      color="loght"

      className={`mb-3 border-dark`}

      style={{maxWidth: '300px'},{ padding: 30 }}


      >

        <CCardHeader>{name}</CCardHeader>

        <CCardBody>

          <CCardTitle>The category of the file is: {categories}</CCardTitle>

          <CCardText>The recipients are: {recipients}</CCardText>
          <CCardText>The duration is: {duration}</CCardText>
          <CCardText>The purposes are: </CCardText>
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
          <CButton  >{url}</CButton>

        </CCardBody>

      </CCard>

  );

}


export default Card;
