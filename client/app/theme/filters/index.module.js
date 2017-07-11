'use strict';

import angular from 'angular';
import appImage from './image/appImage';
import kameleonImg from './image/appImage';
import profilePicture from './image/profilePicture';
import plainText from './text/removeHtml';

export default angular.module('BlurAdmin.theme.filters', [])
  .filter('appImage', appImage)
  .filter('kameleonImg', kameleonImg)
  .filter('profilePicture', profilePicture)
  .filter('plainText', plainText)
  .name;
