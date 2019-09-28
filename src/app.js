import { showAlert } from './auxiliarFunctions/messages.js';
import { showTime } from './auxiliarFunctions/timing.js';
import './style.scss';
import './styles.css';
import $ from 'jquery';

$( "#btnAlert" ).click(showAlert);
      
window.onload=showTime;