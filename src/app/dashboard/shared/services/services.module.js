import angular from 'angular';

let commonServices = angular.module('app.dashboard.shared.services', []);

import Sequences from './sequence.service';
commonServices.service('Sequences', Sequences);

import MessagePreviews from './message-previews.service';
commonServices.service('MessagePreviews', MessagePreviews);

import Subscribers from './subscribers.service';
commonServices.service('Subscribers', Subscribers);

import MessageTreeService from './message-tree.service';
commonServices.service('MessageTrees', MessageTreeService);


export default commonServices;