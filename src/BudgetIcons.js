import React from 'react';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import CardGiftcardTwoToneIcon from '@material-ui/icons/CardGiftcardTwoTone';
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';
import BrightnessAutoTwoToneIcon from '@material-ui/icons/BrightnessAutoTwoTone';
import SportsTwoToneIcon from '@material-ui/icons/SportsTwoTone';
import BeachAccessTwoToneIcon from '@material-ui/icons/BeachAccessTwoTone';
import LocalGroceryStoreTwoToneIcon from '@material-ui/icons/LocalGroceryStoreTwoTone';
import PanToolTwoToneIcon from '@material-ui/icons/PanToolTwoTone';
import TrainTwoToneIcon from '@material-ui/icons/TrainTwoTone';

const BudgetIcons = {
    accounts: [],
    incs:[
        {icon: (<MonetizationOnTwoToneIcon />), title: "allowance" },
        {icon: (<CardGiftcardTwoToneIcon/>), title: "gift"},
        {icon: (<BrightnessAutoTwoToneIcon/>), title: "award"},
        {icon: (<SportsTwoToneIcon/>), title: "umpire"},
        {icon: (<PanToolTwoToneIcon/>), title: "extra choires"}

    ],
    exps: [
        {icon: (<AccountBalanceTwoToneIcon/>), title:'bank fee' },
        {icon: (<LocalGroceryStoreTwoToneIcon/>), title:'grocery' },
        {icon: (<TrainTwoToneIcon/>), title:'transport' }
    ],
    
    savings: [
        {icon: (<BeachAccessTwoToneIcon/>), title: "rainy day"}

    ]
}

export default BudgetIcons;