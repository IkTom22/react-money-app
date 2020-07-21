import React from 'react';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import BrightnessAutoOutlinedIcon from '@material-ui/icons/BrightnessAutoOutlined';
import SportsOutlinedIcon from '@material-ui/icons/SportsOutlined';
import BeachAccessOutlinedIcon from '@material-ui/icons/BeachAccessOutlined';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import PanToolOutlinedIcon from '@material-ui/icons/PanToolOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';
import EmojiFoodBeverageOutlinedIcon from '@material-ui/icons/EmojiFoodBeverageOutlined';
import LocalCafeOutlinedIcon from '@material-ui/icons/LocalCafeOutlined';
import MusicVideoOutlinedIcon from '@material-ui/icons/MusicVideoOutlined';
import QueueMusicOutlinedIcon from '@material-ui/icons/QueueMusicOutlined';
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import FlightOutlinedIcon from '@material-ui/icons/FlightOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import DevicesOtherOutlinedIcon from '@material-ui/icons/DevicesOtherOutlined';
import amber from '@material-ui/core/colors/amber';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import cyan from '@material-ui/core/colors/cyan';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lightBlue from '@material-ui/core/colors/lightBlue';
import grey from '@material-ui/core/colors/grey';
import deepPurple from '@material-ui/core/colors/deepPurple';
import red from '@material-ui/core/colors/red';
import deepOrange from '@material-ui/core/colors/deepOrange';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';
import yellow from '@material-ui/core/colors/yellow';
import brown from '@material-ui/core/colors/brown';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';


const BudgetIcons = {
    accounts: [],
    
    incs:[
        {icon: MonetizationOnOutlinedIcon , title: "allowance", backgroundColor: amber[100], button: false},
        {icon: CardGiftcardOutlinedIcon  , title: "gift", backgroundColor: pink['A100'], button: false},
        {icon: BrightnessAutoOutlinedIcon , title: "award", backgroundColor: purple['A100'], button: false},
        {icon: SportsOutlinedIcon,   title: "umpire",  backgroundColor: cyan['A200'], button: false},
        {icon: PanToolOutlinedIcon, title: "extra choires", backgroundColor: lightGreen['A100'], button: false},
        {icon: BubbleChartOutlinedIcon, title: "misc", backgroundColor: lightBlue[50], button: false},

       

    ],
    exps: [
        {icon: AccountBalanceOutlinedIcon, title:'bank fee',  backgroundColor: grey[700], button: false},
        {icon: LocalGroceryStoreOutlinedIcon, title:'shopping', backgroundColor: amber['A700'], button: false},
        {icon: TrainOutlinedIcon, title:'commuting', backgroundColor: deepPurple['A700'], button: false},
        {icon: FlightOutlinedIcon, title:'travel', backgroundColor: lightBlue['A700'],button: false},
        {icon: LoyaltyOutlinedIcon, title:'clothing', backgroundColor: red['A400'], button: false},
        {icon: FastfoodIcon, title:'fast food', backgroundColor: deepOrange['A400'], button: false},
        {icon: DevicesOtherOutlinedIcon , title:'Electronics', backgroundColor: indigo[900], button: false},
        {icon: CakeOutlinedIcon , title:'presents', backgroundColor: yellow['A700'], button: false},
        {icon: PrintOutlinedIcon , title:'printing', backgroundColor: cyan[900], button: false},
        {icon: RestaurantOutlinedIcon , title:'lunch', backgroundColor: orange[900],button: false},
        {icon: QueueMusicOutlinedIcon  , title:'music', backgroundColor: cyan[700], button: false},
        {icon: LocalCafeOutlinedIcon  , title:'drinks', backgroundColor: brown[900], button: false},
        {icon: BubbleChartOutlinedIcon, title: "misc", backgroundColor: green['A700'], button: false}

    ],
    
    savings: [
        {icon: BeachAccessOutlinedIcon, title: "rainy day", button: false}

    ]
}

// const BudgetIcons = {
//     accounts: [],
    
//     incs:[
//         {icon: (<MonetizationOnOutlinedIcon fontSize="large" style={{ backgroundColor: "yellow"}}/>), title: "allowance" },
//         {icon: (<CardGiftcardOutlinedIcon  fontSize="large"  style={{ backgroundColor: "pink"}}/>), title: "gift"},
//         {icon: (<BrightnessAutoOutlinedIcon fontSize="large" style={{ backgroundColor: "cyan"}}/>), title: "award"},
//         {icon: (<SportsOutlinedIcon  fontSize="large" />), title: "umpire"},
//         {icon: (<PanToolOutlinedIcon fontSize="large" />), title: "extra choires"},
//         {icon: (<MonetizationOnOutlinedIcon fontSize="large" />), title: "allowance" },
//         {icon: (<CardGiftcardOutlinedIcon  fontSize="large" />), title: "gift"},
//         {icon: (<BrightnessAutoOutlinedIcon fontSize="large" />), title: "award"},
//         {icon: (<SportsOutlinedIcon  fontSize="large" />), title: "umpire"},
//         {icon: (<PanToolOutlinedIcon fontSize="large" />), title: "extra choires"}

//     ],
//     exps: [
//         {icon: (<AccountBalanceOutlinedIcon/>), title:'bank fee' },
//         {icon: (<LocalGroceryStoreOutlinedIcon/>), title:'grocery' },
//         {icon: (<TrainOutlinedIcon/>), title:'transport' }
//     ],
    
//     savings: [
//         {icon: (<BeachAccessOutlinedIcon/>), title: "rainy day"}

//     ]
// }

export default BudgetIcons;