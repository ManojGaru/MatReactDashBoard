import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { Avatar, Divider, Grid,Container,ButtonGroup,Button,Typography, FormControl, InputLabel, NativeSelect, InputBase } from '@material-ui/core';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MatBalanceCard from '../../component/MatBalanceCard';

const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    flexGGrid: 1,
    marginLeft:50,marginRight:10
  },
 
  bigAvatar:{
    marginLeft:7,
    width:70,
    height:70,
    marginTop:10,
    marginBottom:5
  },
  aboveAvatar:{
    marginTop:10,
    marginBottom:10
  },
  cardMargin:{
    margin:theme.spacing(2,1)
  },
 
  mainbtn:{
    marginTop:10,
    marginBottom:10,
  },
  chip: {
    marginRight: theme.spacing(1),
  },
  HeadType:{
    fontFamily:'Avanta Garde',
  },
 priceText:{
    fontWeight:'bold',
    color:'#155724'
  },
  size:{
    fontSize:20
  }
  ,
  userDetailsMargin:{
    marginTop:10
  },
  userDetailsFont:{
   fontSize:14
  }
  ,userDetailsIconFont:{
    fontSize:17,
    fontWeight:'bold'
  },
  dropDoenWidth:{
    width:'65%'
  },
  btnTextFont:{
    fontFamily:'Futara'
  },
  btnTextFontLastOne:{
    fontFamily:'Futara',
    color:'#007bff'
  },
 
  btnTextFontLast:{
    fontFamily:'Futara',
    color:'#155724'
  },
  boldText:{
    fontWeight:'bold'
  },
  linkText:{
    color:'#007bff',
    cursor:'pointer'
  },
  margin: {
    margin: theme.spacing(1),
  },
  sideMargin:{
      marginLeft:'7%'
  },
  panel:{
      height:80,
      //backgroundColor:'rgb(237, 241, 253)'
  },
  greenButton: {
    backgroundColor: '#ffffff',
    color: '#2E86C1',
    '&:hover': {
        backgroundColor: '#2E86C1',
        color: '#FFF'
    }
}
}));

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'Dcember'
];
const years =[
  '2019',
  '2020'
]


export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <Grid container direction="row" className={classes.panel}></Grid>

     <Grid container direction="row">

         <Grid xs={3} className={classes.cardMargin}>
            <MatBalanceCard fullborder={true} allprice={false}></MatBalanceCard>
            <Grid container direction="row">
            <Typography style={{fontFamily:'Lucida Sans',marginTop:30,fontSize:15}}>To learn about more Better you Rewards </Typography>
          <Typography style={{fontFamily:'Lucida Sans', marginLeft:5,marginTop:30,fontSize:15,textDecorationLine:'underline'}}  className={classes.linkText}>click Here.</Typography>

            </Grid>
            <Grid container direction="row">
            <Typography style={{fontFamily:'Lucida Sans',marginTop:30,fontSize:15}}>Haven't Signed Up for Btter You Rewards? </Typography>
          <Typography style={{fontFamily:'Lucida Sans', marginLeft:5,fontSize:15,textDecorationLine:'underline'}}  className={classes.linkText}>click Here and join now</Typography>
         
            </Grid>
           <Grid container direction="row">
          <Typography style={{fontFamily:'Lucida Sans',marginTop:30,marginLeft:10,fontSize:23,fontWeight:'bold',color:'#2E86C1'}}>BetterY</Typography>
          <Typography style={{fontFamily:'Lucida Sans',marginTop:30,fontSize:23,fontWeight:'bold',color:'#155724'}}>'</Typography>
          <Typography style={{fontFamily:'Lucida Sans',marginTop:30,fontSize:23,fontWeight:'bold',color:'#FA7703'}}>o</Typography>
          <Typography style={{fontFamily:'Lucida Sans',marginTop:30,fontSize:23,fontWeight:'bold',color:'#2E86C1'}}>u</Typography>
          <Typography style={{fontFamily:'Lucida Sans', marginTop:30,marginLeft:5,fontSize:23,fontWeight:'bold',color:'rgb(7, 123, 34)'}}  className={classes.linkText}>Rewards</Typography>
          </Grid>
         </Grid>
         <Grid xs={8} className={classes.cardMargin}>
             <Grid container direction="row">
            <Grid xs={6} style={{marginLeft:15}}>
            <Grid container direction="row">
            {/* <Grid xs={1}></Grid> */}
            <Grid xs={6}>
            <FormControl className={classes.sideMargins,classes.dropDoenWidth}>
                Months
        {/* <InputLabel htmlFor="demo-customized-select-native">Months</InputLabel> */}
        <NativeSelect 
          id="demo-customized-select-native"
        //  value={age}
        //  onChange={handleChange}
          input={<BootstrapInput />}
        >
          {months.map(month => (
              <option value={10}>{month}</option>
          ))}
         
        </NativeSelect>
      </FormControl>
            </Grid>
            <Grid xs={6}>
            <FormControl className={classes.margin,classes.dropDoenWidth}>
                Years
        {/* <InputLabel htmlFor="demo-customized-select-native">Years</InputLabel> */}
        <NativeSelect
          id="demo-customized-select-native"
        //  value={age}
        //  onChange={handleChange}
          input={<BootstrapInput />}
        >
           {years.map(year => (
              <option value={10}>{year}</option>
          ))}
        </NativeSelect>
      </FormControl>
            </Grid>
             </Grid>
             </Grid>
             </Grid>
             <Grid container direction="row" className={classes.cardMargin}>
                 <Grid xs={5}><MatBalanceCard fullborder={false} allprice={false}></MatBalanceCard></Grid>
                 <Grid xs={1}></Grid>
                 <Grid xs={5}><MatBalanceCard fullborder={false} allprice={true}></MatBalanceCard></Grid>
             </Grid>
             <Grid container direction="row" className={classes.cardMargin}>
                 <Grid xs={5}><MatBalanceCard fullborder={false} allprice={false}></MatBalanceCard></Grid>
                 <Grid xs={1}></Grid>
                 <Grid xs={5}><MatBalanceCard fullborder={false} allprice={true}></MatBalanceCard></Grid>
             </Grid>
         </Grid>
     </Grid>
     <Divider></Divider>
     <Grid container direction="row" style={{marginTop:10,marginBottom:10}}>
         <Grid xs={4}>
            <Grid container direction="row" style={{border:'1.3px solid #2E86C1',borderRadius:3,height:45}}>
              <Grid xs={6} className={classes.greenButton} style={{borderRight:'1.3px solid #2E86C1',textAlign:'center',paddingTop:9,cursor:'pointer',}} >
                <Typography  className={classes.btnTextFont} style={{}}>Eligible Rewards</Typography>
              </Grid>
              <Grid xs={6} className={classes.greenButton} style={{textAlign:'center',paddingTop:8,cursor:'pointer'}}>
              <Typography className={classes.btnTextFont} style={{}}>Complement Rewards</Typography>
                </Grid>
            </Grid>
         </Grid>
         <Grid xs={4}></Grid>
         <Grid xs={2}>
             <Grid container direction="row">
               <Grid xs={5}>
               <Grid container direction="row">
               <CheckCircleIcon className={classes.btnTextFontLastOne}></CheckCircleIcon><Typography className={classes.btnTextFont}>Eligible</Typography>
              </Grid>
               </Grid>
               <Grid xs={1}></Grid>
               <Grid xs={6}>
               <Grid container direction="row">
               <CheckCircleIcon className={classes.btnTextFontLast}></CheckCircleIcon><Typography className={classes.btnTextFont}>Complement</Typography>
              </Grid>
               </Grid>
        </Grid>
         </Grid>
         <Grid xs={2}></Grid>
     
            </Grid>
    <Grid container direction="row">
  
    </Grid>
</div>
  );
}
