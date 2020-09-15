/**
 * @license
 * Copyright 2020 德和居--曲院风荷
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview DataBase blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author begin.he@qq.com (Tiejian He)
 */
'use strict';

// goog.provide('Blockly.Blocks.db');  // Deprecated
// goog.provide('Blockly.Constants.Db');

// goog.require('Blockly');
// goog.require('Blockly.Blocks');
// goog.require('Blockly.FieldDropdown');
// goog.require('Blockly.FieldLabel');
// goog.require('Blockly.FieldNumber');
// goog.require('Blockly.FieldVariable');

/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['MATH_HUE']. (2018 April 5)
 */
Blockly.Constants.Math.HUE = 120; //?Db

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
{
    "type": "bb_db_table",
    "message0": "%1 %2 数据集     %3 自动生成主键 %4 表名： %5 %6 %7 %8 %9 %10",
    "args0": [
        {
        "type": "field_image",
        "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
        "width": 16,
        "height": 16,
        "alt": "类型：表",
        "flipRtl": false
        },
        {
        "type": "field_input",
        "name": "t_title",
        "text": "无名标题"
        },
        {
        "type": "field_checkbox",
        "name": "autoPK",
        "checked": true
        },
        {
        "type": "input_dummy"
        },
        {
        "type": "field_input",
        "name": "t_name",
        "text": "nonameTable"
        },
        {
        "type": "input_dummy"
        },
        {
        "type": "field_label_serializable",
        "name": "t_description",
        "text": "  描述"
        },
        {
        "type": "input_value",
        "name": "TableDescript",
        "check": "String"
        },
        {
        "type": "field_label_serializable",
        "name": "t_fields",
        "text": "字段"
        },
        {
        "type": "input_statement",
        "name": "TableFields",
        "check": "bb_db_field"
        }
    ],
    "inputsInline": true,
    "colour": 120,
    "tooltip": "表设计",
    "helpUrl": "http://www.suncai.net/"
},
{
    "type": "bb_db_field",
    "lastDummyAlign0": "RIGHT",
    "message0": "属性： %1  代码： %2  类型： %3 %4  长度 = %5      %6 允许空值",
    "args0": [
      {
        "type": "field_input",
        "name": "field_name",
        "text": "字段0"
      },
      {
        "type": "field_input",
        "name": "field_code",
        "text": "fieldname0"
      },
      {
        "type": "field_dropdown",
        "name": "field_type",
        "options": [
          [
            "文本",
            "char"
          ],
          [
            "整数",
            "int"
          ],[
            "小数",
            "float"
          ],
          [
            "日期",
            "date"
          ],
          [
            "其它",
            "others"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "OtherType",
        "check": [
          "bb_db_fieldtype",
          "bb_db_fieldtype_char",
          "bb_db_fieldtype_int",
          "bb_db_fieldtype_float",
          "bb_db_fieldtype_bool",
          "bb_db_fieldtype_date"
        ]
      },
      {
        "type": "field_number",
        "name": "field_len",
        "value": 50,
        "min": 0
      },
      {
        "type": "field_checkbox",
        "name": "allowNull",
        "checked": true
      }
    ],
    "inputsInline": false,
    "previousStatement": "bb_db_field",
    "nextStatement": "bb_db_field",
    "colour": 180,
    "tooltip": "字段",
    "helpUrl": "http://www.suncai.net/"
  },
  {
    "type": "bb_db_fieldtype_char",
    "message0": "文本类型",
    "inputsInline": true,
    "output": "bb_db_fieldtype_char",
    "colour": 230,
    "tooltip": "文本(字符)类型",
    "helpUrl": "http://www.suncai.net/"
  },
  {
    "type": "bb_db_fieldtype_float",
    "message0": "小数类型",
    "inputsInline": true,
    "output": "bb_db_fieldtype_float",
    "colour": 230,
    "tooltip": "浮点（小数）类型",
    "helpUrl": "http://www.suncai.net"
  },
  {
    "type": "bb_db_fieldtype_int",
    "message0": "整数类型",
    "output": "bb_db_fieldtype_int",
    "colour": 230,
    "tooltip": "整数类型",
    "helpUrl": "http://www.suncai.net/"
  },
  {
    "type": "bb_db_fieldtype_date",
    "message0": "日期类型",
    "output": "bb_db_fieldtype_date",
    "colour": 230,
    "tooltip": "日期类型",
    "helpUrl": "http://www.suncai.net/"
  },
  {
    "type": "bb_db_fieldtype_bool",
    "message0": "布尔类型",
    "output": "bb_db_fieldtype_bool",
    "colour": 180,
    "tooltip": "布尔逻辑（真假，0或1）类型",
    "helpUrl": "http://www.suncai.net/"
  }
]);  // END JSON EXTRACT (Do not delete this comment.)