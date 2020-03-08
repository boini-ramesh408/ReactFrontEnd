import React from 'react';

import './App.css';
import Login from './component/fundooApp/Login';
import Registration from './component/fundooApp/Registration'
import {BrowserRouter as Router,Route}from 'react-router-dom';
import ForgotPassword from './component/fundooApp/ForgotPassword';
import ResetPassword from './component/fundooApp/ResetPassword';
import Dashboard from './component/dashboard/Dashboard';
import  { Displaynotes } from './component/display/Displayallnotes';
import { CreateNote } from './component/create/CreateNote';
import Searchfilter from './component/dashboard/Searchfilter';
import EditNotes from './component/editComponents/EditNotes';
import Reminder from './component/cardComponents/Reminder';
import DisplayReminder from './component/display/DisplayReminder';
import ShowNote from './component/dashboard/ShowNote';
import AlertDialog from './component/create/CollaborateNotes';
import ArchieveNotes from './component/create/ArchieveNotes';
import TrashedNotes from './component/cardComponents/TrashedNotes';
import ImageUpload from './component/cardComponents/ImageUpload';
import EditLabels from './component/editComponents/EditLabels';
import Suggestions from './component/cardComponents/Suggestions';
import Graph from './component/Graph'

import BarCharts from './component/graphs/BarCharts';
import Main from './component/graphs/Main';
// import Notes from './compo/NotesCrea'
function App() 
{
  return (
    <div className="App">

    <Router> 
        
       <Route   exact path='/' component={Login}/>
       <Route   exact path='/register' component={Registration}/>
       <Route   exact path='/forgot' component={ForgotPassword}/>
       <Route   exact path='/dash/create' component={CreateNote}/>
       <Route   path='/dash' component={Dashboard}/>
       <Route   path='/dash/notes' component={ShowNote}/>
       <Route   exact path= '/reset' component={ResetPassword}/>
       <Route   exact path= '/displaynotes' component={Displaynotes}/>
       <Route   exact path= '/display' component={Displaynotes}/>
       <Route   path='/dash/search' component={Searchfilter}/>
       <Route   path='/edit' component={EditNotes}/>
       <Route   path= '/dash/reminder' component={Reminder}/>
       <Route   path='/dash/displayremind' component={DisplayReminder}/>
       <Route   path='/collaborator' component={AlertDialog}/>
       <Route   path='/dash/archieve' component={ArchieveNotes}/>
       <Route   path='/dash/trash' component={TrashedNotes}/>
       <Route   path='/dash/reminder' component={DisplayReminder}/>
       <Route   path='/img' component={ImageUpload}/>
       <Route   path='/dash/label' component={EditLabels}/>
       <Route   path='/suggest' component={Suggestions}/>
       <Route   path='/graph' component={Graph}/>

       <Route   path='/bar' component={BarCharts}/>
       <Route   path='/main' component={Main}/>
  
       
    </Router> 
   
    </div>
  );
}

export default App;
