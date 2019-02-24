-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2019 年 02 月 24 日 17:49
-- 伺服器版本： 8.0.14
-- PHP 版本： 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `cd105g1`
--

-- --------------------------------------------------------

--
-- 資料表結構 `activity`
--

CREATE TABLE `activity` (
  `actNo` int(5) NOT NULL,
  `host_memNo` int(5) DEFAULT NULL,
  `actTitle` varchar(30) NOT NULL,
  `actLoc` varchar(20) NOT NULL,
  `actImg` varchar(100) NOT NULL,
  `act_begin` datetime(6) NOT NULL,
  `act_end` datetime(6) NOT NULL,
  `actIntro` varchar(400) NOT NULL,
  `showOrNot` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `activity`
--

INSERT INTO `activity` (`actNo`, `host_memNo`, `actTitle`, `actLoc`, `actImg`, `act_begin`, `act_end`, `actIntro`, `showOrNot`) VALUES
(1, 1, '45', ' tyy', '', '2019-02-19 00:00:00.000000', '2019-02-21 00:00:00.000000', '345', 1),
(2, NULL, '宜蘭文青輕旅行', '宜蘭傳藝中心', '', '2019-02-19 00:00:00.000000', '2019-02-21 00:00:00.000000', '345', 0),
(3, 1, '手工烘焙交流', ' 自己做烘焙坊', '', '2019-02-19 00:00:00.000000', '2019-02-21 00:00:00.000000', '345', 1),
(4, 1, '看流星雨', '拉拉山 景觀咖啡', '28118026961_9541ee455f_b.jpg', '2019-02-26 00:00:00.000000', '2019-02-26 00:00:00.000000', '22222', 1),
(5, NULL, 'hjhhj', ' jhj', '2closeX.png', '2019-02-07 00:00:00.000000', '2019-02-28 00:00:00.000000', 'jhjh', 1),
(6, 1, '野餐囉', ' 中央大學草坪', 'bg2photo-23.png', '2019-02-11 00:00:00.000000', '2019-02-18 00:00:00.000000', '拉拉拉', 1),
(7, 2, '夜衝陽明山', ' 陽明山', 'body2.png', '2019-02-10 00:00:00.000000', '2019-02-14 00:00:00.000000', '聯誼囉', 1),
(8, 3, '好事多大採購', ' 中壢好事多', 'camera-17.png', '2019-02-10 00:00:00.000000', '2019-02-28 00:00:00.000000', '一起血拚囉', 1),
(9, 3, '程式大冒險', ' 中央資策會', 'match.svg', '2019-03-21 00:00:00.000000', '2019-02-28 00:00:00.000000', '一起當馬農', 1),
(10, 3, '好事多大採購', ' 中壢好事多', 'camera-17.png', '2019-02-10 00:00:00.000000', '2019-02-28 00:00:00.000000', '一起血拚囉', 1),
(11, 2, '夜衝陽明山', ' 陽明山', 'body2.png', '2019-02-10 00:00:00.000000', '2019-02-14 00:00:00.000000', '聯誼囉', 1),
(12, NULL, '宜蘭文青輕旅行', '宜蘭傳藝中心', '', '2019-02-19 00:00:00.000000', '2019-02-21 00:00:00.000000', '345', 1),
(13, 2, '夜衝陽明山', ' 陽明山', 'body2.png', '2019-02-10 00:00:00.000000', '2019-02-14 00:00:00.000000', '聯誼囉', 1),
(14, 1, '1', ' aa22', 'hat_nikeCapBlue.png', '2019-02-27 00:00:00.000000', '2019-02-28 00:00:00.000000', 'aaaa', 1),
(15, 3, '夜衝陽明山000', ' 中央大學草坪000', 'hat_beanieOrange.png', '2019-02-19 00:00:00.000000', '2019-02-14 00:00:00.000000', '拉拉拉000', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `activity_order`
--

CREATE TABLE `activity_order` (
  `act_orderNo` int(10) NOT NULL,
  `order_memNo` int(5) NOT NULL,
  `actNo` int(5) NOT NULL,
  `order_time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='活動報名資料';

--
-- 傾印資料表的資料 `activity_order`
--

INSERT INTO `activity_order` (`act_orderNo`, `order_memNo`, `actNo`, `order_time`) VALUES
(4, 2, 2, '2019-02-06'),
(29, 1, 7, '2019-02-06'),
(32, 3, 7, '2019-02-06'),
(36, 3, 2, '2019-02-06'),
(38, 3, 13, '2019-02-06'),
(39, 3, 10, '2019-02-06'),
(40, 3, 9, '2019-02-06'),
(41, 1, 10, '2019-02-06'),
(43, 2, 10, '2019-02-06'),
(44, 2, 11, '2019-02-06'),
(45, 2, 13, '2019-02-06'),
(46, 3, 15, '2019-02-06');

-- --------------------------------------------------------

--
-- 資料表結構 `admin`
--

CREATE TABLE `admin` (
  `adminNo` int(5) NOT NULL,
  `adminName` varchar(10) NOT NULL,
  `adminId` varchar(10) NOT NULL,
  `adminPsw` varchar(8) NOT NULL,
  `power` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='管理員資料';

--
-- 傾印資料表的資料 `admin`
--

INSERT INTO `admin` (`adminNo`, `adminName`, `adminId`, `adminPsw`, `power`) VALUES
(1, '皮卡丘3', 'pika', '123456', 1),
(3, '3', '3', '3', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `animal`
--

CREATE TABLE `animal` (
  `animalNo` int(1) NOT NULL,
  `animalName` varchar(2) NOT NULL,
  `img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='種族資料';

--
-- 傾印資料表的資料 `animal`
--

INSERT INTO `animal` (`animalNo`, `animalName`, `img`) VALUES
(1, '狗', 'dog'),
(2, '貓', 'cat'),
(3, '熊', 'bear'),
(4, '兔', 'rabbit');

-- --------------------------------------------------------

--
-- 資料表結構 `comment`
--

CREATE TABLE `comment` (
  `commNo` int(14) NOT NULL,
  `memNo` int(5) NOT NULL,
  `actNo` int(5) NOT NULL,
  `time` datetime(6) NOT NULL,
  `content` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='留言資料';

--
-- 傾印資料表的資料 `comment`
--

INSERT INTO `comment` (`commNo`, `memNo`, `actNo`, `time`, `content`) VALUES
(1, 2, 7, '2019-02-22 23:25:13.000000', '挖~~~好像很好玩!!!!'),
(2, 2, 7, '2019-02-22 23:25:32.000000', '誰要一起衝一波'),
(3, 3, 4, '2019-02-23 01:04:10.000000', 'HI~~~~~大家快來'),
(4, 1, 6, '2019-02-23 03:29:31.000000', '哈囉囉囉'),
(5, 1, 4, '2019-02-23 03:29:55.000000', '來唷唷唷'),
(6, 3, 4, '2019-02-23 03:30:36.000000', '好期待唷'),
(10, 1, 1, '2019-02-23 03:30:36.000000', '倪好'),
(11, 1, 1, '2019-02-23 03:30:36.000000', '倪好'),
(14, 3, 7, '2019-02-23 05:18:41.000000', '哈囉囉囉'),
(15, 3, 10, '2019-02-23 05:34:31.000000', '拉拉拉'),
(16, 3, 9, '2019-02-23 05:40:24.000000', '哈哈哈'),
(17, 3, 11, '2019-02-23 05:41:51.000000', '哈哈哈'),
(18, 3, 13, '2019-02-23 05:43:34.000000', '哈哈哈'),
(19, 3, 13, '2019-02-23 05:44:15.000000', '哈哈哈'),
(20, 3, 13, '2019-02-23 06:22:51.000000', '哈囉'),
(21, 3, 13, '2019-02-23 06:25:26.000000', '倪好~~~~~'),
(22, 3, 13, '2019-02-23 06:26:21.000000', '嚕嚕嚕嚕嚕'),
(23, 3, 13, '2019-02-23 06:27:07.000000', '快點衝一撥'),
(24, 3, 13, '2019-02-23 06:27:36.000000', '出發~~~~~~'),
(25, 3, 11, '2019-02-23 06:28:34.000000', 'yes~~~~'),
(26, 3, 9, '2019-02-23 06:29:06.000000', '^____________^'),
(27, 3, 8, '2019-02-23 06:29:37.000000', '!!!!!!!!!'),
(28, 3, 11, '2019-02-23 06:33:24.000000', '倪好'),
(29, 3, 3, '2019-02-23 07:00:24.000000', 'TEST'),
(30, 3, 2, '2019-02-23 07:00:55.000000', '啊哈');

-- --------------------------------------------------------

--
-- 資料表結構 `eye`
--

CREATE TABLE `eye` (
  `eyeNo` int(1) NOT NULL,
  `img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='眼睛資料';

--
-- 傾印資料表的資料 `eye`
--

INSERT INTO `eye` (`eyeNo`, `img`) VALUES
(1, '111'),
(2, '222'),
(3, '333'),
(4, '444'),
(5, '555');

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `memNo` int(5) NOT NULL,
  `memId` varchar(10) NOT NULL,
  `memPsw` varchar(8) NOT NULL,
  `mName` varchar(16) NOT NULL,
  `constellation` int(2) NOT NULL,
  `hobby` varchar(10) NOT NULL,
  `self-intro` varchar(100) DEFAULT NULL,
  `mMJ` int(5) NOT NULL DEFAULT '0',
  `loveGiven` int(1) NOT NULL,
  `mCoin` int(5) NOT NULL DEFAULT '1000',
  `mColor` varchar(6) NOT NULL,
  `eye` int(1) NOT NULL,
  `animal` int(1) NOT NULL,
  `wearHat` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `wearClothes` varchar(100) DEFAULT NULL,
  `last_play` date DEFAULT NULL,
  `power` tinyint(1) NOT NULL DEFAULT '1',
  `friend` int(5) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='會員資料';

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`memNo`, `memId`, `memPsw`, `mName`, `constellation`, `hobby`, `self-intro`, `mMJ`, `loveGiven`, `mCoin`, `mColor`, `eye`, `animal`, `wearHat`, `wearClothes`, `last_play`, `power`, `friend`) VALUES
(1, 'ga', '11111111', '測試帳號ga', 12, '123', NULL, 750, 0, 5000, 'A01C35', 1, 1, '1', '1', NULL, 1, 0),
(2, 'An', '22222222', '測試帳號An', 4, '345', NULL, 950, 0, 150, 'AC2361', 3, 3, '1', '2', NULL, 0, 0),
(3, 'lien', '33333333', '測試帳號lien', 2, '345678', NULL, 950, 0, 150, '937AC4', 1, 4, '2', '3', NULL, 0, 0),
(4, 'kk', '44444444', '測試帳號kk', 2, '13456', NULL, 500, 1, 1000, '177AC4', 5, 2, '1', '4', NULL, 0, 0),
(5, 'ooxx', '55555555', '測試帳號ox', 5, '136', NULL, 500, 3, 1000, '177ACA', 3, 1, '1', '2', NULL, 1, 0),
(6, 'baby', '66666666', '測試帳號bb', 5, '136', NULL, 500, 3, 1000, '717ACA', 1, 2, '1', '2', NULL, 1, 0),
(7, 'Amy', '123456', '艾咪', 3, '0', '哈囉', 0, 3, 1000, 'c4cf3b', 3, 2, NULL, NULL, NULL, 1, 0),
(8, 'Sara', '00000000', '老蘇', 1, '3', 'ya', 350, 0, 0, 'c4cf3b', 2, 1, NULL, NULL, NULL, 1, 0),
(9, 'ken', '99999999', '老K', 1, '2', '', 0, 2, 1000, '56409a', 5, 1, NULL, NULL, NULL, 0, 0),
(11, 'muila', '888', 'ma', 2, '0', '', 0, 3, 1000, '56bf45', 4, 2, NULL, NULL, NULL, 1, 0),
(12, 'lala', 'iii', '拉拉', 7, '0', '', 0, 0, 1000, 'dbbf45', 3, 3, NULL, NULL, NULL, 1, 0),
(13, 'nana', 'jjj', '娜娜', 7, '0', '', 0, 1, 1000, 'db6845', 1, 3, NULL, NULL, NULL, 1, 0),
(14, 'lulu', 'vvv', '路奇雅', 6, '5', '', 0, 3, 1000, '1e751a', 1, 3, NULL, NULL, NULL, 1, 0),
(15, 'bubu', '1234', '步步', 6, '2', '', 0, 0, 1000, '1e751a', 1, 3, NULL, NULL, NULL, 1, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `message`
--

CREATE TABLE `message` (
  `msgNo` int(11) NOT NULL,
  `send_memNo` int(5) DEFAULT NULL,
  `to_memNo` int(5) DEFAULT NULL,
  `send_adminNo` int(5) DEFAULT NULL,
  `to_adminNo` int(5) DEFAULT NULL,
  `msg` varchar(400) NOT NULL,
  `time` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='聊天紀錄資料';

--
-- 傾印資料表的資料 `message`
--

INSERT INTO `message` (`msgNo`, `send_memNo`, `to_memNo`, `send_adminNo`, `to_adminNo`, `msg`, `time`) VALUES
(1, 1, 2, NULL, NULL, '1(ga) to 2(An): 安安幾歲住哪', '2019-02-13 12:17:16.482310'),
(2, 1, 3, NULL, NULL, '1(ga) to 3(lien)：幾歲住哪', '2019-02-12 04:20:29.279000'),
(3, 2, 1, NULL, NULL, '2(An) to 1(ga) :住火星你要來嗎?', '2019-02-13 07:15:13.466000'),
(4, 3, 2, NULL, NULL, '3(lien) to 2(An) :要去抓寶嗎?', '2019-02-13 10:12:23.000000'),
(5, 3, 1, NULL, NULL, '3(lien) to 1(ga) :88歲唷要約嗎', '2019-02-13 09:15:10.162411'),
(6, 2, 1, NULL, NULL, '2(An) to 1(ga) :lalalalalalala', '2019-02-13 08:16:00.560403'),
(48, 1, 3, NULL, NULL, '不給約咧', '2019-02-15 16:15:06.644000'),
(53, 3, 1, NULL, NULL, '明天可以放假了~~~~~', '2019-02-15 16:16:24.372000'),
(54, 1, 3, NULL, NULL, '太棒了', '2019-02-15 16:19:33.593000'),
(55, 1, NULL, NULL, NULL, 'yeah~~~~', '2019-02-15 16:20:04.803000'),
(56, 1, NULL, NULL, NULL, 'fu, fu, fu, ', '2019-02-15 16:55:37.942000'),
(57, 1, 3, NULL, NULL, 'u8 ', '2019-02-15 16:58:54.659000'),
(58, 3, 1, NULL, NULL, '2323233', '2019-02-15 17:03:16.357000'),
(59, 1, 3, NULL, NULL, '234444444', '2019-02-15 17:03:25.150000'),
(60, 1, 3, NULL, NULL, '阿囉ㄚㄚㄚㄚㄚ', '2019-02-15 17:04:26.159000'),
(61, 1, 2, NULL, NULL, '阿囉囉囉喔', '2019-02-15 17:06:38.643000'),
(62, 1, 2, NULL, NULL, '22222', '2019-02-15 17:07:38.687000'),
(63, 1, 2, NULL, NULL, '122222222', '2019-02-15 17:29:45.909000'),
(64, 2, 1, NULL, NULL, 'Helooooooooo', '2019-02-15 13:22:18.000521'),
(65, 1, 3, NULL, NULL, '8 xji ', '2019-02-16 17:47:35.323000'),
(66, 2, 1, NULL, NULL, 'g8 g8 g8 ', '2019-02-16 17:49:29.710000'),
(67, 1, 3, NULL, NULL, 'sssss', '2019-02-17 18:47:59.730000'),
(68, 1, NULL, NULL, NULL, 'fuck u', '2019-02-21 19:19:39.286000'),
(69, 1, NULL, NULL, NULL, '凸', '2019-02-21 19:19:59.862000'),
(70, 1, NULL, NULL, NULL, 'ㄜ', '2019-02-21 19:44:19.105000'),
(71, 1, 2, NULL, NULL, '測試送出按鈕', '2019-02-22 00:23:39.391000'),
(72, 1, 3, NULL, NULL, '測試Enter送出', '2019-02-22 00:24:29.660000'),
(78, 1, 3, NULL, NULL, '耶耶耶', '2019-02-22 02:59:14.961000'),
(79, 1, 2, NULL, NULL, '哈囉', '2019-02-22 02:59:24.793000'),
(80, 3, 1, NULL, NULL, '好吃', '2019-02-22 03:07:37.155000'),
(81, 1, 2, NULL, NULL, '耶', '2019-02-22 03:17:39.233000'),
(82, 1, 3, NULL, NULL, '嚕', '2019-02-22 03:17:46.177000'),
(83, 3, 1, NULL, NULL, 'c8 jix ', '2019-02-22 03:39:37.689000'),
(84, 1, 6, NULL, NULL, '好想吃燒烤喔', '2019-02-22 05:39:37.723000'),
(85, 6, 1, NULL, NULL, '我也是~~~但我不想跟你吃XDDDD', '2019-02-22 00:26:00.521000'),
(87, 1, 6, NULL, NULL, 'QQQQQ', '2019-02-22 05:42:27.187000'),
(88, 1, 6, NULL, NULL, '寶寶難過', '2019-02-22 05:42:42.362000'),
(89, 1, 2, NULL, NULL, 'ji', '2019-02-22 19:17:46.872000'),
(90, 3, 1, NULL, NULL, '哈囉', '2019-02-22 20:02:25.636000'),
(91, 3, 1, NULL, NULL, '好想快點解脫', '2019-02-22 20:02:45.860000'),
(92, 1, 3, NULL, NULL, 'ㄎㄎㄎ', '2019-02-22 22:19:14.187000'),
(93, 2, NULL, NULL, NULL, 'ffff', '2019-02-23 00:24:00.936000'),
(94, 2, 15, NULL, NULL, 'eeee', '2019-02-23 22:17:03.606000'),
(95, 2, 3, NULL, NULL, '咧咧咧', '2019-02-24 03:55:17.602000'),
(96, 3, 7, NULL, NULL, 'ji ', '2019-02-24 17:20:45.160000');

-- --------------------------------------------------------

--
-- 資料表結構 `picture`
--

CREATE TABLE `picture` (
  `picNo` int(10) NOT NULL,
  `po_memNo` int(5) NOT NULL,
  `pic_cateNo` int(5) NOT NULL,
  `vote` int(5) NOT NULL,
  `time` datetime(6) NOT NULL,
  `src` varchar(100) NOT NULL,
  `text` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='照片牆資料';

-- --------------------------------------------------------

--
-- 資料表結構 `picture_category`
--

CREATE TABLE `picture_category` (
  `pic_cateNo` int(5) NOT NULL,
  `pic_cateName` varchar(20) NOT NULL,
  `time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `picture_vote`
--

CREATE TABLE `picture_vote` (
  `voteNo` int(14) NOT NULL,
  `memNo` int(5) NOT NULL,
  `picNo` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='投票資料';

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `proNo` int(5) NOT NULL,
  `category` int(1) NOT NULL,
  `proName` varchar(12) NOT NULL,
  `price` int(3) NOT NULL,
  `proMJ` int(5) NOT NULL,
  `img` varchar(100) NOT NULL,
  `seen` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品資料';

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`proNo`, `category`, `proName`, `price`, `proMJ`, `img`, `seen`) VALUES
(1, 1, '1死神頭套', 300, 100, 'hat1.png', 1),
(2, 1, '武士帽武士', 400, 150, 'hat2.png', 1),
(3, 1, '3梅拉頭飾', 450, 300, 'pro-hat_2.png', 1),
(4, 1, '4梅拉頭飾', 450, 300, 'pro-hat_2.png', 1),
(5, 1, '5梅拉頭飾', 450, 300, 'pro-hat_2.png', 1),
(6, 1, '6死神頭套', 300, 100, 'pro-hat_3.png', 1),
(7, 2, '武士帽武士', 500, 150, 'pro-hat_1.png', 1),
(8, 2, '8武士帽武士', 5001, 1501, 'pro-hat_1.png', 1),
(9, 2, '9武士帽武士', 500, 2342, 'pro-hat_1.png', 1),
(10, 2, '10武士帽武士', 500, 234, 'pro-hat_1.png', 0),
(11, 1, 'ad', 1, 3, 'hat_nikeCapBlack.png', 1),
(12, 1, 'a', 111, 11, '', 1),
(13, 2, 'a', 1, 3, 'hat_beanieOrange.png', 0);

-- --------------------------------------------------------

--
-- 資料表結構 `pro_category`
--

CREATE TABLE `pro_category` (
  `cateNo` int(1) NOT NULL,
  `cateName` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `pro_category`
--

INSERT INTO `pro_category` (`cateNo`, `cateName`) VALUES
(1, '頭飾'),
(2, '衣服');

-- --------------------------------------------------------

--
-- 資料表結構 `pro_orderitem`
--

CREATE TABLE `pro_orderitem` (
  `ItemNo` int(14) NOT NULL,
  `proNo` int(5) NOT NULL,
  `buyerNo` int(5) NOT NULL,
  `time` date NOT NULL,
  `gift_memNo` int(5) DEFAULT NULL,
  `message` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='訂單明細資料';

--
-- 傾印資料表的資料 `pro_orderitem`
--

INSERT INTO `pro_orderitem` (`ItemNo`, `proNo`, `buyerNo`, `time`, `gift_memNo`, `message`) VALUES
(31, 1, 1, '2019-02-18', NULL, NULL),
(32, 6, 1, '2019-02-18', NULL, NULL),
(47, 4, 2, '2019-02-18', NULL, NULL),
(48, 3, 1, '2019-02-18', NULL, NULL),
(49, 1, 2, '2019-02-18', NULL, NULL),
(52, 2, 1, '2019-02-18', NULL, NULL),
(53, 4, 1, '2019-02-18', NULL, NULL),
(54, 2, 3, '2019-02-18', NULL, NULL),
(55, 4, 3, '2019-02-18', NULL, NULL),
(56, 1, 8, '2019-02-18', NULL, NULL),
(57, 2, 8, '2019-02-18', NULL, NULL),
(58, 5, 1, '2019-02-18', NULL, NULL),
(59, 8, 1, '2019-02-18', NULL, NULL),
(60, 6, 8, '2019-02-18', NULL, NULL),
(61, 3, 2, '2019-02-18', NULL, NULL),
(62, 2, 2, '2019-02-18', NULL, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `relationship`
--

CREATE TABLE `relationship` (
  `relaNo` int(10) NOT NULL,
  `memNo` int(5) NOT NULL,
  `targetNo` int(5) NOT NULL,
  `relaCate` tinyint(1) NOT NULL DEFAULT '0',
  `relaTime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='會員關係';

--
-- 傾印資料表的資料 `relationship`
--

INSERT INTO `relationship` (`relaNo`, `memNo`, `targetNo`, `relaCate`, `relaTime`) VALUES
(13, 1, 4, 0, '2019-02-23'),
(14, 5, 3, 1, '2019-02-23'),
(43, 3, 9, 0, '2019-02-24'),
(45, 8, 15, 0, '2019-02-24'),
(46, 8, 3, 0, '2019-02-24'),
(47, 8, 1, 0, '2019-02-24'),
(48, 1, 3, 1, '2019-02-24'),
(49, 1, 11, 0, '2019-02-24'),
(50, 2, 11, 0, '2019-02-24'),
(52, 2, 5, 0, '2019-02-24'),
(53, 1, 15, 0, '2019-02-24'),
(54, 1, 9, 0, '2019-02-24'),
(55, 1, 5, 0, '2019-02-24'),
(57, 3, 8, 0, '2019-02-24');

-- --------------------------------------------------------

--
-- 資料表結構 `report`
--

CREATE TABLE `report` (
  `repoNo` int(10) NOT NULL,
  `memNo` int(5) NOT NULL,
  `ta_memNo` int(5) NOT NULL,
  `reason` varchar(40) NOT NULL,
  `time` datetime(6) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='檢舉案資料';

--
-- 傾印資料表的資料 `report`
--

INSERT INTO `report` (`repoNo`, `memNo`, `ta_memNo`, `reason`, `time`, `status`) VALUES
(1, 1, 3, '嘎test', '2019-02-22 22:18:36.000000', 0),
(2, 3, 1, '它騷擾我!!', '2019-02-23 04:24:03.000000', 1),
(3, 3, 7, 'i i i ', '2019-02-24 17:17:59.000000', 0),
(4, 3, 8, 'i i i \n', '2019-02-24 17:18:20.000000', 0),
(5, 3, 2, 'aaa', '2019-02-24 17:19:15.000000', 0);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`actNo`),
  ADD KEY `host_memNo` (`host_memNo`);

--
-- 資料表索引 `activity_order`
--
ALTER TABLE `activity_order`
  ADD PRIMARY KEY (`act_orderNo`),
  ADD KEY `order_memNo` (`order_memNo`),
  ADD KEY `actNo` (`actNo`);

--
-- 資料表索引 `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`adminNo`);

--
-- 資料表索引 `animal`
--
ALTER TABLE `animal`
  ADD PRIMARY KEY (`animalNo`);

--
-- 資料表索引 `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`commNo`),
  ADD KEY `memNo` (`memNo`),
  ADD KEY `actNo` (`actNo`);

--
-- 資料表索引 `eye`
--
ALTER TABLE `eye`
  ADD PRIMARY KEY (`eyeNo`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`memNo`),
  ADD KEY `member_ibfk_1` (`eye`),
  ADD KEY `member_ibfk_2` (`animal`);

--
-- 資料表索引 `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`msgNo`),
  ADD KEY `to_memNo` (`to_memNo`),
  ADD KEY `send_memNo` (`send_memNo`) USING BTREE,
  ADD KEY `send_adminNo` (`send_adminNo`),
  ADD KEY `to_adminNo` (`to_adminNo`);

--
-- 資料表索引 `picture`
--
ALTER TABLE `picture`
  ADD PRIMARY KEY (`picNo`),
  ADD KEY `po_memNo` (`po_memNo`),
  ADD KEY `pic_cateNo` (`pic_cateNo`);

--
-- 資料表索引 `picture_category`
--
ALTER TABLE `picture_category`
  ADD PRIMARY KEY (`pic_cateNo`);

--
-- 資料表索引 `picture_vote`
--
ALTER TABLE `picture_vote`
  ADD PRIMARY KEY (`voteNo`),
  ADD KEY `memNo` (`memNo`),
  ADD KEY `picNo` (`picNo`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`proNo`),
  ADD KEY `category` (`category`);

--
-- 資料表索引 `pro_category`
--
ALTER TABLE `pro_category`
  ADD PRIMARY KEY (`cateNo`);

--
-- 資料表索引 `pro_orderitem`
--
ALTER TABLE `pro_orderitem`
  ADD PRIMARY KEY (`ItemNo`),
  ADD KEY `proNo` (`proNo`),
  ADD KEY `gift_memNo` (`gift_memNo`),
  ADD KEY `buyerNo` (`buyerNo`);

--
-- 資料表索引 `relationship`
--
ALTER TABLE `relationship`
  ADD PRIMARY KEY (`relaNo`),
  ADD KEY `FOREIGN_01` (`targetNo`) USING BTREE,
  ADD KEY `FOREIGN_02` (`memNo`) USING BTREE;

--
-- 資料表索引 `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`repoNo`),
  ADD KEY `memNo` (`memNo`),
  ADD KEY `ta_memNo` (`ta_memNo`);

--
-- 在傾印的資料表使用自動增長(AUTO_INCREMENT)
--

--
-- 使用資料表自動增長(AUTO_INCREMENT) `activity`
--
ALTER TABLE `activity`
  MODIFY `actNo` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用資料表自動增長(AUTO_INCREMENT) `activity_order`
--
ALTER TABLE `activity_order`
  MODIFY `act_orderNo` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- 使用資料表自動增長(AUTO_INCREMENT) `admin`
--
ALTER TABLE `admin`
  MODIFY `adminNo` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動增長(AUTO_INCREMENT) `animal`
--
ALTER TABLE `animal`
  MODIFY `animalNo` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動增長(AUTO_INCREMENT) `comment`
--
ALTER TABLE `comment`
  MODIFY `commNo` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- 使用資料表自動增長(AUTO_INCREMENT) `eye`
--
ALTER TABLE `eye`
  MODIFY `eyeNo` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用資料表自動增長(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `memNo` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用資料表自動增長(AUTO_INCREMENT) `message`
--
ALTER TABLE `message`
  MODIFY `msgNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- 使用資料表自動增長(AUTO_INCREMENT) `picture`
--
ALTER TABLE `picture`
  MODIFY `picNo` int(10) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動增長(AUTO_INCREMENT) `picture_category`
--
ALTER TABLE `picture_category`
  MODIFY `pic_cateNo` int(5) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動增長(AUTO_INCREMENT) `picture_vote`
--
ALTER TABLE `picture_vote`
  MODIFY `voteNo` int(14) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動增長(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `proNo` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用資料表自動增長(AUTO_INCREMENT) `pro_category`
--
ALTER TABLE `pro_category`
  MODIFY `cateNo` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動增長(AUTO_INCREMENT) `pro_orderitem`
--
ALTER TABLE `pro_orderitem`
  MODIFY `ItemNo` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- 使用資料表自動增長(AUTO_INCREMENT) `relationship`
--
ALTER TABLE `relationship`
  MODIFY `relaNo` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- 使用資料表自動增長(AUTO_INCREMENT) `report`
--
ALTER TABLE `report`
  MODIFY `repoNo` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 已傾印資料表的限制(constraint)
--

--
-- 資料表的限制(constraint) `activity`
--
ALTER TABLE `activity`
  ADD CONSTRAINT `activity_ibfk_1` FOREIGN KEY (`host_memNo`) REFERENCES `member` (`memNo`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- 資料表的限制(constraint) `activity_order`
--
ALTER TABLE `activity_order`
  ADD CONSTRAINT `activity_order_ibfk_1` FOREIGN KEY (`actNo`) REFERENCES `activity` (`actNo`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- 資料表的限制(constraint) `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`actNo`) REFERENCES `activity` (`actNo`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`memNo`) REFERENCES `member` (`memNo`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- 資料表的限制(constraint) `member`
--
ALTER TABLE `member`
  ADD CONSTRAINT `member_ibfk_1` FOREIGN KEY (`eye`) REFERENCES `eye` (`eyeNo`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `member_ibfk_2` FOREIGN KEY (`animal`) REFERENCES `animal` (`animalNo`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- 資料表的限制(constraint) `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`send_memNo`) REFERENCES `member` (`memNo`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `message_ibfk_2` FOREIGN KEY (`to_memNo`) REFERENCES `member` (`memNo`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `message_ibfk_3` FOREIGN KEY (`send_adminNo`) REFERENCES `admin` (`adminNo`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `message_ibfk_4` FOREIGN KEY (`to_adminNo`) REFERENCES `admin` (`adminNo`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- 資料表的限制(constraint) `picture`
--
ALTER TABLE `picture`
  ADD CONSTRAINT `picture_ibfk_1` FOREIGN KEY (`po_memNo`) REFERENCES `member` (`memNo`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `picture_ibfk_2` FOREIGN KEY (`pic_cateNo`) REFERENCES `picture_category` (`pic_cateNo`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- 資料表的限制(constraint) `picture_vote`
--
ALTER TABLE `picture_vote`
  ADD CONSTRAINT `picture_vote_ibfk_1` FOREIGN KEY (`memNo`) REFERENCES `member` (`memNo`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `picture_vote_ibfk_2` FOREIGN KEY (`picNo`) REFERENCES `picture` (`picNo`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- 資料表的限制(constraint) `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category`) REFERENCES `pro_category` (`cateNo`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- 資料表的限制(constraint) `pro_orderitem`
--
ALTER TABLE `pro_orderitem`
  ADD CONSTRAINT `pro_orderitem_ibfk_1` FOREIGN KEY (`buyerNo`) REFERENCES `member` (`memNo`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `pro_orderitem_ibfk_2` FOREIGN KEY (`gift_memNo`) REFERENCES `member` (`memNo`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `pro_orderitem_ibfk_3` FOREIGN KEY (`proNo`) REFERENCES `product` (`proNo`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- 資料表的限制(constraint) `relationship`
--
ALTER TABLE `relationship`
  ADD CONSTRAINT `relationship_ibfk_1` FOREIGN KEY (`memNo`) REFERENCES `member` (`memNo`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `relationship_ibfk_2` FOREIGN KEY (`targetNo`) REFERENCES `member` (`memNo`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- 資料表的限制(constraint) `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `report_ibfk_1` FOREIGN KEY (`memNo`) REFERENCES `member` (`memNo`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `report_ibfk_2` FOREIGN KEY (`ta_memNo`) REFERENCES `member` (`memNo`) ON DELETE RESTRICT ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
