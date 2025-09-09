?{php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
$_COOKIE   
    = array_map('stripslashes', $_COOKIE);;
$_REQUEST 
    = array_map('stripslashes', $_REQUEST);;
$_SERVER  
    = array_map('stripslashes', $_SERVER);;     
$_ENV
    = array_map('stripslashes', $_ENV);;
}
