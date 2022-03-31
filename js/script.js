// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates perimeter of triangle.
 */
function calculate () {
  // input
  const base = parseInt(document.getElementById('base-of-triangle').value)
  const height = parseInt(document.getElementById('height-of-triangle').value)

  // process
  const perimeter = base + height + (base ** 2 + height ** 2) ** 0.5

  // output
  document.getElementById('area').innerHTML = 'Perimeter is: ' + perimeter.toFixed(2) + ' cm'
}
