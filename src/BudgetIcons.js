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


const BudgetIcons = {
    accounts: [],
    
    incs:[
        {icon: MonetizationOnOutlinedIcon , title: "allowance", backgroundColor: "#ffe082", button: false},
        {icon: CardGiftcardOutlinedIcon  , title: "gift", backgroundColor: "#f8bbd0", button: false},
        {icon: BrightnessAutoOutlinedIcon , title: "award", backgroundColor: "#ea80fc", button: false},
        {icon: SportsOutlinedIcon,   title: "umpire",  backgroundColor: "#18ffff", button: false},
        {icon: PanToolOutlinedIcon, title: "extra choires", backgroundColor: "#ccff90", button: false},
        {icon: BubbleChartOutlinedIcon, title: "misc", backgroundColor: "#e1f5fe", button: false},

       

    ],
    exps: [
        {icon: AccountBalanceOutlinedIcon, title:'bank fee', button: false},
        {icon: LocalGroceryStoreOutlinedIcon, title:'grocery' , button: false},
        {icon: TrainOutlinedIcon, title:'transportation', button: false},
        {icon: FlightOutlinedIcon, title:'travel', button: false},
        {icon: LoyaltyOutlinedIcon, title:'clothing', button: false},
        {icon: FastfoodIcon, title:'fast food', button: false},
        {icon: DevicesOtherOutlinedIcon , title:'Electronics', button: false},
        {icon: CakeOutlinedIcon , title:'gift', button: false},
        {icon: PrintOutlinedIcon , title:'printing', button: false},
        {icon: RestaurantOutlinedIcon , title:'lunch', button: false},
        {icon: QueueMusicOutlinedIcon  , title:'music', button: false},
        {icon: LocalCafeOutlinedIcon  , title:'cafe', button: false}

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