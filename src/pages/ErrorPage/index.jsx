import React,{useState,useEffect} from 'react';
import history from '../../utils/history';
import { ROUTERS } from '../../Constants/router';

import { Button } from 'antd';

import * as Style from './styles';

function ErrorPage(){
    return(
        <Style.errorContainer>
            <h1>There's nothing here</h1>
            <Style.errorButton onClick={() => history.push(ROUTERS.HOME)}>
                Home
            </Style.errorButton>
        </Style.errorContainer>

    )


}
export default ErrorPage;