import React from 'react';
import {Route} from "react-router-dom";
import LayoutHome from '../../components/LayoutHome';



export default function HomeTemplate({Component,...props}) {
    // const {exact,path,component}=props;
    return (
      <Route
        {...props}
        render={(propsComponent)=>(
            <LayoutHome>
               <Component {...propsComponent}/>
            </LayoutHome>
        )}
      />
    )
}
