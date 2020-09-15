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
  // Block for db table
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
// Block for db field
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
  // Block for db field type--string
  {
    "type": "bb_db_fieldtype_char",
    "message0": "文本类型",
    "inputsInline": true,
    "output": "bb_db_fieldtype_char",
    "colour": 230,
    "tooltip": "文本(字符)类型",
    "helpUrl": "http://www.suncai.net/"
  },
  // Block for db field type--float
  {
    "type": "bb_db_fieldtype_float",
    "message0": "小数类型",
    "inputsInline": true,
    "output": "bb_db_fieldtype_float",
    "colour": 230,
    "tooltip": "浮点（小数）类型",
    "helpUrl": "http://www.suncai.net"
  },
  // Block for db field type--int
  {
    "type": "bb_db_fieldtype_int",
    "message0": "整数类型",
    "output": "bb_db_fieldtype_int",
    "colour": 230,
    "tooltip": "整数类型",
    "helpUrl": "http://www.suncai.net/"
  },
  // Block for db field type--datetime
  {
    "type": "bb_db_fieldtype_date",
    "message0": "日期类型",
    "output": "bb_db_fieldtype_date",
    "colour": 230,
    "tooltip": "日期类型",
    "helpUrl": "http://www.suncai.net/"
  },
  // Block for db field type--boolean
  {
    "type": "bb_db_fieldtype_bool",
    "message0": "布尔类型",
    "output": "bb_db_fieldtype_bool",
    "colour": 180,
    "tooltip": "布尔逻辑（真假，0或1）类型",
    "helpUrl": "http://www.suncai.net/"
  }
]);  // END JSON EXTRACT (Do not delete this comment.)


Blockly.JavaScript['bb_db_table'] = function(block) {
  var text_t_title = block.getFieldValue('t_title');
  var checkbox_autopk = block.getFieldValue('autoPK') == 'TRUE';
  var text_t_name = block.getFieldValue('t_name');
  var value_tabledescript = Blockly.JavaScript.valueToCode(block, 'TableDescript', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_tablefields = Blockly.JavaScript.statementToCode(block, 'TableFields');
  // TODO: Assemble JavaScript into code variable.

  var today=new Date();
  var t=today.toString('T');
  var pk_id='';
  var firstField=''; //primary key
  var _tablefields='';

  if (statements_tablefields!==''){ //fields are not empty
    if (checkbox_autopk){ //auto generate primary key '__RId'
      pk_id='[__RId] [varchar](32) NOT NULL,';
      firstField='[__RId]';
    }else{
      //get first field code
      var _first_comma=statements_tablefields.indexOf(",");
      //截取并去左空格，第一个为字段名称
      firstField=statements_tablefields.substr(0,_first_comma).replace(/(^\s*)/g, "").split(" ")[0];
    }

    var _last_comma=statements_tablefields.lastIndexOf(","); // get rid of ',\n' 最后的',\n'去掉
    _tablefields=statements_tablefields.substr(0,_last_comma);
  }

  var _copyleft=`@2020 德和居 powered by 曲院风荷 出品`;
  var code = `\n
  /****** Object:  Table [dbo].[${text_t_name}]  ${text_t_title}  Script Date: ${t} ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING OFF
GO
CREATE TABLE [dbo].[${text_t_name}](
${pk_id}
${_tablefields}
 CONSTRAINT [PK_${text_t_name}] PRIMARY KEY CLUSTERED 
(
${firstField} ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** ${_copyleft} ******/`;
  return code;
};

Blockly.JavaScript['bb_db_field'] = function(block) {
  var text_field_name = block.getFieldValue('field_name');
  var text_field_code = block.getFieldValue('field_code');
  var dropdown_field_type = block.getFieldValue('field_type');
  var value_othertype = Blockly.JavaScript.valueToCode(block, 'OtherType', Blockly.JavaScript.ORDER_ATOMIC);
  var number_field_len = block.getFieldValue('field_len');
  var checkbox_allownull = block.getFieldValue('allowNull') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var field_len='';
  if (dropdown_field_type==='char'){
    dropdown_field_type='varchar';
    field_len=`(${number_field_len})`;
  } else if (dropdown_field_type==='float'){
    dropdown_field_type='numeric';
    field_len=number_field_len.toString().replace(".",",");
    if (field_len.indexOf(",")<0){
      field_len=field_len+",0";
    }
    field_len=`(${field_len})`;
  // } else if (dropdown_field_type==='int'){
  //   dropdown_field_type='integer';
  } else if (dropdown_field_type==='date'){
    dropdown_field_type='datetime';
  }

  var isNull='';
  if (checkbox_allownull){
    isNull='NULL';
  } else{
    isNull='NOT NULL';
  }
  
  var code = `[${text_field_code}] [${dropdown_field_type}]${field_len} ${isNull},\n`; //'...;\n';
  return code;
};

Blockly.JavaScript['bb_db_fieldtype_char'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bb_db_fieldtype_float'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bb_db_fieldtype_int'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bb_db_fieldtype_date'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bb_db_fieldtype_bool'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
