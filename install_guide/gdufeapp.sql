/*
Navicat MySQL Data Transfer

Source Server         : ������
Source Server Version : 50556
Source Host           : 114.67.237.46:3306
Source Database       : gdufeapp

Target Server Type    : MYSQL
Target Server Version : 50556
File Encoding         : 65001

Date: 2017-11-11 15:54:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for feedback
-- ----------------------------
DROP TABLE IF EXISTS `feedback`;
CREATE TABLE `feedback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sno` bigint(11) DEFAULT NULL COMMENT 'ѧ��',
  `content` varchar(500) DEFAULT NULL COMMENT '����',
  `contact` varchar(50) DEFAULT NULL COMMENT '��ϵ��ʽ',
  `create_time` datetime DEFAULT NULL COMMENT '��������ʱ��',
  `fix` tinyint(4) DEFAULT '0' COMMENT '�Ƿ��ѽ����0Ϊ������1Ϊ�ѽ����2Ϊ���Բ�����',
  `dev_brand` varchar(50) DEFAULT NULL COMMENT '�ֻ�Ʒ��',
  `dev_model` varchar(50) DEFAULT NULL COMMENT '�ֻ��ͺ�',
  `os_version` varchar(50) DEFAULT NULL COMMENT '�ֻ�ϵͳ�汾��',
  `comment` varchar(255) DEFAULT NULL COMMENT '����Ա�Ը÷���������ע��(�û����ɼ�)',
  `app_ver` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8;
