import React from 'react';
import './InstructionsPage.css';
import {Outlet} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


export default function InstructionsPage() {
    const navigate = useNavigate();

    function clickGetStartButton(event){
        navigate('/InstructionsPage/GettingStarted');
    }
    function clickShapeButton(event){
        navigate('/InstructionsPage/Shapes');
    }
    function clickSizingButton(event){
        navigate('/InstructionsPage/Sizing');
    }
    function clickRotationButton(event){
        navigate('/InstructionsPage/Rotation');
    }
    function clickCameraButton(event){
        navigate('/InstructionsPage/Camera');
    }
    function clickColorsButton(event){
        navigate('/InstructionsPage/Color');
    }
    function clickMainMenuButton(event){
        navigate('/');
    }
    

    return (
    <div class="instructMainPage">
        <div class="mainMenuButton" type="button" onClick={clickMainMenuButton}>MAIN MENU</div>
        <div class="containerOuter">
            <div class="containerInner">
                <nav>

                    <div class="tabButton" type="button" onClick={clickGetStartButton}>GETTING STARTED</div>
                    <div class="tabButton" type="button" onClick={clickShapeButton}>SHAPES</div>
                    <div class="tabButton" type="button" onClick={clickSizingButton}>SIZING</div>
                    <div class="tabButton" type="button" onClick={clickRotationButton}>ROTATION</div>
                    <div class="tabButton" type="button" onClick={clickCameraButton}>CAMERA</div>
                    <div class="tabButton" type="button" onClick={clickColorsButton}>COLORS</div>
                </nav>
        
            </div>
        </div>
        <Outlet/>    
        
    </div>
    
    );
}