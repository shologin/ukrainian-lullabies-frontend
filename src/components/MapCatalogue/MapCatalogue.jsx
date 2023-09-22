import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getLightTheme } from "../../redux/theme/themeSelectors";
import { NavLink, Outlet } from "react-router-dom";
import "./map-catalogue.css"


import mapLight from "../../assets/images/mapLight.svg";
import mapDark from "../../assets/images/mapDark.svg";
import photo1 from "../../assets/images/Karpaty.svg";
import photo2 from "../../assets/images/ZahPod.svg";
import photo3 from "../../assets/images/Volyn.svg";
import photo4 from "../../assets/images/ZahPol.svg";
import photo5 from "../../assets/images/ShidPol.svg";
import photo6 from "../../assets/images/SeredPol.svg";
import photo7 from "../../assets/images/ShidPod.svg";
import photo8 from "../../assets/images/SeredNad.svg";
import photo9 from "../../assets/images/Slobidshyna.svg";
import photo10 from "../../assets/images/Donshyna.svg";
import photo11 from "../../assets/images/Tavria.svg";
import photo12 from "../../assets/images/NyjPod.svg";
import photo13 from "../../assets/images/NyjPob.svg";
import photo14 from "../../assets/images/Krym.svg";

const catalogue = [
  {
    region: `m 0,313.64528 0.27085084,-30.877 6.22956936,-3.52106 5.4170168,-4.87532 3.791912,-5.14616 1.625105,-3.79191 -0.541702,-1.62511 -1.354254,-2.43766 9.47978,-11.64658 15.438498,-0.27085
h 0.812552
l -3.25021,-4.60447 -5.687868,-6.77127 -0.27085,-16.79275 8.667226,-20.04296 21.938919,5.68786 16.792752,31.9604 27.355933,7.58383 20.85552,20.04296 23.83487,3.79191 21.93892,12.72999 14.62595,16.5219 2.1668,18.41786 16.79275,42.25273 -6.22957,2.70851 -37.10656,-0.27085 -4.87532,13.27169 -13.81339,2.43766 -7.85467,-7.04212 0.27085,-14.3551 -0.27085,-1.89595 -5.41702,-0.54171
h -28.71019
l -10.834033,-5.41701 -12.188288,-4.33362 -13.271692,0.27085 -7.312972,-6.22957 -8.667227,-6.22956 -8.125526,6.77127 -10.292332,0.27085 -7.312972,-6.77127
h -7.042122
l -1.625105,-0.27085 -0.541702,-1.08341 1.083403,-1.35425 2.97936,-2.43766
v -1.35425
l -5.417017,-4.06277
z`,
    id: "region1",
    photo: `${photo1}`,
    pattern: "hoverPattern1"
  },
  {
    region: `m 46.586345,195.28346 13.000841,-14.08425 9.479779,-8.12552 10.834034,-9.20893 8.938078,-9.75063 8.396376,-8.39638
h 20.855517
l 0.27085,-11.91743 0.5417,-0.81256 1.89596,1.08341 5.14616,4.33361 8.66723,5.14617 2.70851,1.6251 7.85467,8.66723
h 7.58383
l 6.77127,1.0834 5.68786,2.16681 4.33362,3.52106 2.1668,3.52106 0.54171,2.97936 0.5417,4.87532
v 9.47978
l 8.12552,7.04212 7.85468,6.22957 6.77127,4.06276 2.97936,0.81255 6.50042,1.62511 4.33361,2.1668 3.52106,3.25021 1.62511,3.79192 -0.5417,7.31297 -1.08341,15.16765 1.89596,11.37573 2.16681,14.08424 -4.60447,26.54339 11.10489,24.91827 22.20976,22.20977 -9.20892,7.31298 -11.10489,-0.27085 -14.08424,13.81339 -12.72999,-28.16849 -0.27085,-30.877 -12.45914,-10.83403 -4.60447,-3.52106 -4.87531,-4.06276 -6.50042,-4.60447 -9.47978,-5.68786 -6.77127,-2.70851 -12.72999,-2.16681 -9.47978,-1.6251 -17.60531,-19.50127 -27.626782,-7.31297 -13.813393,-32.23125 -23.564023,-1.89595 -1.895956,-0.81256
z`,
    id: "region2",
    photo: `${photo2}`,
    pattern: "hoverPattern2"
  },
  {
    region: `m 108.40058,115.29532
v -8.61842
h 35.04825
l 35.43129,2.10673 24.3231,5.36257 28.15351,11.29971 2.68128,-0.76609 10.53363,-4.78801 4.59649,-1.9152 2.48977,-0.19152 2.48976,0.76608 2.68129,3.25585 4.40497,4.78801 4.02193,2.48977 4.78801,1.72368 8.61842,2.29825 9.57602,1.34064 14.17252,1.14912 12.64035,0.76608 1.9152,3.25585 0.95761,3.83041
v 4.78801
l -0.76608,6.70322 -1.91521,5.93713 -2.48977,5.17106 -2.48976,2.68128 -1.91521,1.34065 -1.34064,3.63888 -1.9152,6.5117 -1.53217,5.93713 -1.9152,6.12866 -1.34065,3.63889 -1.72368,2.10672 -1.53216,0.57457 -1.53217,-0.38305 -0.9576,-0.57456 -6.32018,-1.14912 -6.32017,-0.57456 -3.63889,0.19152
h -1.53216
l -0.57457,0.19152 -2.8728,-2.68129 -5.17105,-4.21345 -5.5541,-4.21345 -3.83041,-2.48976 -4.78801,-2.10673 -3.63889,-0.57456 -6.51169,-0.76608 -4.40497,-0.19152 -5.93714,1.14912 -5.36257,0.38304 -2.68129,-0.57456 -1.9152,-0.76608 -0.95761,-1.14912 -2.29824,-0.57457 -4.02193,0.38304 -4.78801,1.53217 -4.02193,1.9152 -5.93714,2.68129 -4.40497,2.48977 -2.87281,0.9576 -4.02193,-0.9576 -4.40497,-1.91521 -3.06432,-2.10672 -2.29825,-3.44737 -1.34064,-3.06433
v -6.89474
l -1.72369,-5.55409 -1.9152,-4.21345 -1.91521,-1.91521 -2.10672,-1.9152 -2.10673,-1.72368 -3.25584,-1.72369 -2.48977,-0.9576 -4.59649,-1.34064 -4.59649,-0.76609 -5.5541,-0.57456 -6.70321,-6.70321 -12.25731,-6.89474 -6.12866,-8.23538 0.19152,-5.36257 -0.38304,-0.76609 -1.14912,-0.38304 -6.70322,0.19152
z`,
    id: "region3",
    photo: `${photo3}`,
    pattern: "hoverPattern3"
  },
  {
    region: `m 99.111843,78.762792 -0.578134,-0.764339 -0.09219,-9.793226 0.679247,-2.064092 0.855123,-3.034109 3.540921,-11.56408 -0.0239,-7.445358 0.50274,-0.813962 0.74157,-0.252651 11.15664,-0.01069 3.258,0.782192 8.17543,1.632351 5.01339,-7.513775 7.7087,-4.644372 4.81493,-7.754968 0.69129,-0.432532 23.31761,-0.04788 8.76206,4.02193 7.83775,-4.012172 0.68491,0.03812 11.68275,4.213451 8.52266,3.686769 8.19656,-3.952711 0.90067,0.07442
h 9.95906
L 238.2515,32.75
l 3.85365,2.658304 1.50893,0.741184 1.90126,0.937243 1.57004,0.570981 1.9686,0.352001 1.71817,0.05498 11.87427,0 0.46754,0.187138 0.33334,0.252815 4.8011,7.172986 0.92349,0.409214 1.4224,0.788059 1.3987,0.902642 0.78008,0.629251 0.75469,0.888687 0.51413,0.882877 0.0875,0.905028 -0.25505,0.938357 -0.57456,0.837902 -1.27088,1.001823 -1.4092,0.772635 -1.12639,0.451967 -2.17855,0.837902 -0.60312,0.389109 -0.80934,0.712134 -0.90268,1.083208 -1.65891,2.36416 -1.21598,2.077818 -1.41742,2.398974 -3.73465,6.727157 -3.08827,5.386513 -1.17306,1.699743 -1.62793,11.060308 -0.76608,5.554093 -1.53216,7.469297 -1.14912,6.89474 -11.68275,8.04386 -1.53217,0.19152 -2.8728,-0.76608 -2.87281,-1.53217 -4.02193,-1.9152 -5.55409,-2.29825 -4.21345,-1.14912 -3.44737,-0.76608 -8.04386,-1.72369 -8.04386,-1.72368 -8.23538,-1.53216 -8.61842,-0.95761 -9.76755,-0.57456 -10.3421,-0.76608 -9.57603,-1.14912 -8.61842,-1.340646 -9.3845,-0.574562
h -8.4269
l -6.89474,-0.574561 -2.04457,-0.290006 -5.42473,-1.505498 0.0239,-11.539109 -1.46034,-1.125183 -1.21788,-0.836554 -1.13275,-0.934573 -1.67778,-1.146031 -2.42113,-1.834999
z`,
    id: "region4",
    photo: `${photo4}`,
    pattern: "hoverPattern4"
  },
  {
    region: `m 453.94601,74.483982
h 4.06277
l 0.5417,-10.021481 11.37573,-5.417017 -5.68786,-10.292332 0.81255,-0.541702 11.91744,-3.25021 5.14616,-14.896796
h 12.72999
l 14.3551,-12.72999 40.89847,0.541702 9.47978,-7.583824
V 0.81255253
h 14.62595
l 9.75063,9.20892847 11.91744,-9.20892847
h 12.72998
l 5.68787,2.43765757 4.60447,1.6251051 5.14616,0.5417017 11.64659,-0.2708509 0.5417,0.8125526 0.27085,6.5004204 10.83404,0.270851 1.0834,0.812552
v 11.646586
l 14.35509,6.771272 0.27085,20.042962 -7.31297,4.062763 -0.5417,0.27085 1.62511,2.166807 5.95871,4.604464 0.27085,11.375736 -4.33361,16.251051 0.5417,3.52106 2.16681,8.396377 1.0834,6.77127 -4.60446,6.50042 -7.31297,11.64659 -18.14701,4.06276 -18.68871,-9.47978 -11.37573,-5.68787 -7.04213,-2.97936 -13.27169,-11.64658 -18.41786,8.66722 -33.85635,14.3551 -29.79359,17.33445 -14.62595,12.45914 -1.89595,-2.97936 -1.89596,-1.6251 -2.16681,-0.5417 -4.60446,-0.54171 -4.06276,-0.81255 -2.70851,-1.35425 -0.81256,-1.89596
v -1.89595
l 2.16681,-3.25021 5.41702,-4.33362 7.04212,-5.68787 -0.27085,-11.10488 -10.02148,-19.772112 -1.89596,-2.166807 -6.50042,-4.604464 -5.14616,-5.958719 -2.43766,-4.875315 -1.62511,-3.791912 -0.5417,-1.625105
z`,
    id: "region5",
    photo: `${photo5}`,
    pattern: "hoverPattern5"
  },
  {
    region: `m 280.76901,52.093567 18.57748,-0.574561 13.59795,3.638889 3.44737,1.723684 3.06433,0.957602 3.44737,-0.383041 3.25585,-0.383041 3.83041,0.957603 3.44736,2.106725 7.27778,1.532164
h 22.98246
l 3.06433,5.554093 3.44736,5.362573 0.76609,0.574562 2.68128,-2.106725 2.48977,-2.681287 3.44737,-6.703216 16.08772,0.19152 1.14912,0.191521 0.19152,1.532163 0.19152,10.533626 7.4693,4.596491 7.4693,-5.171052 12.25731,0.19152 4.40497,-4.979532 8.04386,0.19152 4.02193,9.384503 0.38304,0.383041 5.55409,0.191521 0.38304,0.19152 2.68129,4.404971 2.48977,4.596491 3.63888,4.596492 3.83041,3.830409 3.83041,2.681286 1.53217,0.766082 3.63889,5.362576 1.34064,2.29824 2.68129,5.74562 1.14912,4.78801 0.38304,4.78801 -0.76608,4.78801 -0.57456,0.76608 -7.66082,5.93714 -4.21345,3.63889 -1.14913,1.53216 -1.34064,2.29825 -0.19152,1.72368 0.76608,2.68129 1.34065,2.10672 2.10672,2.68129 1.53216,2.29824 1.14913,1.91521 1.34064,0.9576 4.21345,0.76608 4.02193,0.19152 2.10673,0.38305 0.57456,0.9576
v 1.9152 1.91521
l -0.95761,3.25584 -1.9152,1.91521 -1.9152,0.9576 -3.63889,1.14912 -2.29825,0.19153 -3.63889,0.38304 -2.48976,0.38304 -3.06433,2.68128 -3.83041,3.06433 -4.59649,4.40497 -7.4693,12.83187 -26.2383,3.63889 -31.98392,-5.93713 -14.17252,-5.74562 -21.64181,-5.36257 -18.57749,0.9576 -9.76754,-4.21345 4.02193,-5.93713 3.63889,-7.27778 1.53216,-4.59649 1.14913,-5.55409
v -4.5965
l -0.57457,-4.40497 -0.76608,-4.21345 -1.53216,-3.83041 -1.91521,-2.29824 -2.8728,-2.29825 -3.63889,-1.34064 -4.59649,-1.72369 -5.93714,-1.14912 -8.23538,-0.57456 -8.23538,-0.19152 -6.51169,-0.38304
h -5.36258
l -4.21345,-0.76608 -4.97953,-1.53217 -3.25585,-1.9152 -3.25585,-2.29825 -3.06432,-2.48976 -2.48977,-3.25585 -4.02193,-6.5117 0.9576,-2.8728 0.76609,-6.70322 0.57456,-5.937134 -0.19152,-9.576024 11.49122,-19.343567 6.32018,-5.554094 4.40497,-4.021929
z`,
    id: "region6",
    photo: `${photo6}`,
    pattern: "hoverPattern6"
  },
  {
    region: `m 211.9687,190.90684 2.16019,-2.43022 9.18081,-1.89016 4.17285,0.22603 4.19789,0.044 0.27002,0.81007
h 7.29064
l 6.7506,0.54005 3.78033,-2.43021 3.78033,-0.81007 2.70024,1.62014 3.24029,3.51031 9.99088,10.53093 1.62014,1.08009 31.32277,2.70024 4.32038,-7.02062 2.16019,-7.56067 2.43021,-8.10071 17.35146,6.882 24.54384,0.33039 25.39409,9.15213 12.80753,1.86513 15.82459,1.56093 14.48981,1.80185 16.02885,0.19152 9.0678,17.69569 -2.38623,25.5961 4.86043,6.21055 4.05036,5.94052 2.70024,1.35012 4.5904,0.27002 4.86043,-0.54004 7.56067,-2.16019 2.16019,-0.54005 3.80537,0.93257 1.92469,2.17913 1.83061,21.46047 -1.02394,8.25772 -1.34064,3.24976 -5.41604,5.02691 -3.54482,7.28456 -2.41835,7.78352 1.5954,9.71742 3.30663,11.30632 -6.98611,4.34881 -5.74901,9.23089 -26.14831,-7.65474 -5.09594,1.57615 -6.91369,2.45526 -6.42102,1.14304 -6.21055,0.72817 -7.9437,-0.0406 -9.87787,-0.68757 -14.60293,-1.95311 -3.3946,4.25136 -2.60278,3.98132 -23.37906,-0.54005 -9.83387,-9.41632 -8.30172,0.96708 -8.36126,-6.74112 -3.24028,-5.94052 -2.43022,-1.35012 -17.94406,-9.15578 -6.6281,-1.64517 -9.87787,-2.4397 -30.35568,10.27039 -7.56067,-9.99088 -1.89017,-2.16019 -14.04123,-8.60625 -9.45084,-22.71652 3.24029,-16.74147 0.81007,-9.72086 -1.0801,-9.72086 -2.70023,-13.23117 5.13045,-11.07097 -1.35012,-17.28153
z`,
    id: "region7",
    photo: `${photo7}`,
    pattern: "hoverPattern7"
  },
  {
    region: `m 448.77876,208.12396 6.61846,-19.57217 19.97929,-10.46819 10.32944,-6.81665 13.56809,-21.87194 28.01228,-15.86368 52.25995,-22.68614 16.33437,10.59368 32.26826,16.74809 21.8982,-4.06347 6.38463,21.78055 9.45261,4.63947 0.88858,15.41072 16.39123,14.87301 -1.08737,9.82102 -1.02494,9.5366 -0.85855,8.34132 -1.61675,5.56965 -4.71266,16.56678 -8.90105,17.76047 -8.54155,4.74452 -5.79026,15.98246 -4.17063,11.65503 -26.6867,-10.70411 -63.65757,22.39672 -65.07823,-13.50036 -1.68702,-33.95447 -10.80013,-7.02062 -18.50035,7.28982 -7.76132,-11.20723 2.3625,-24.90908
z`,
    id: "region8",
    photo: `${photo8}`,
    pattern: "hoverPattern8"
  },
  {
    region: `m 668.03893,86.137598 4.05035,0.270024 3.24029,4.590405 6.21055,3.240285 9.45083,0.810072 11.07098,1.080095 7.29064,1.620143 8.64076,3.240288 -0.54005,6.75059 7.02062,3.24029 4.05036,4.5904 1.62014,4.32039
v 24.57216
l 2.70024,5.94053 3.51031,3.51031 6.21055,1.62014 28.08248,-1.35012 8.10071,7.02062
h 15.39136
l 10.80095,-7.29064 3.78033,-1.62015 11.61103,-0.27002 12.15107,-9.45083 5.94052,6.48057 8.37074,18.63164 9.99088,-0.27002 7.83069,8.91078 7.8307,14.31127 -8.64077,9.72085 0.27003,12.69112 -2.142,5.12301 -5.84607,5.90169 -2.55279,2.46574 1.33358,3.49956 0.453,5.19766 -0.80163,4.97085 -3.12032,3.89175 -7.78602,3.43904 -5.46004,6.2843 -4.33527,8.89094 -3.75222,4.33692 -12.01591,6.42997 -7.16901,1.67405 -0.53756,5.10895 -2.67295,4.07021
c -2.43352,-7.04212 2.08875,7.95827 -5.67546,7.31297
l -4.60116,-0.54584 -1.35838,0.26506 -5.95872,-0.007 -4.05533,1.07679 -5.39303,5.67547 -3.23946,2.43517 -4.04126,2.15027 -8.91078,-4.86043 -7.29064,-1.08009 -8.64077,-2.43022 -9.45083,-2.16019 -4.86043,-0.81007 -3.51031,-0.27002 -4.86043,2.43021 -6.21055,2.16019 -11.07097,4.32038 -23.49207,0.54005 -9.18164,-3.50039 -9.98096,-4.33609 -8.84612,-3.45675 6.98573,-20.36158 4.54905,-1.55233 12.96363,-25.92808 7.29064,-22.41197 2.97026,-33.21293 -19.98921,-20.79681 -0.56003,-9.57257 -7.5291,-3.1053 -6.75473,-19.97681 10.80095,-12.43185
z`,
    id: "region9",
    photo: `${photo9}`,
    pattern: "hoverPattern9"
  },
  {
    region: `m 878.78389,178.3059 0.73517,-0.55561 0.87099,-0.0881 11.55428,5.43511 12.98399,-0.0479 12.98229,11.0231 0.66254,-0.2394 6.54182,-9.47757 0.82668,-0.72973 1.18764,0.20942 8.75989,10.76007 11.70848,-0.0479 3.32438,0.53227 3.16448,1.08071 5.43229,2.83548 4.85092,3.16218 4.07932,3.38183 14.83405,0.0785 0.70348,0.64917 0.18058,1.67518 -0.0528,11.38561 5.99696,10.06225 -6.07346,8.63746 0.041,9.19049 -0.58351,1.07372 -4.17228,0.1217 -2.17121,0.14915 -0.81172,0.6028 7.89922,7.35918 -0.002,10.26255 -12.69029,4.85961 -2.97026,6.81665 6.20889,11.00161 8.37074,5.94053 6.82079,7.42855 -0.80772,1.61862 -4.93132,6.14601 4.11393,5.25843 0.81835,1.55326 -0.85233,1.53545 -1.91645,0.56116 -1.2147,1.20973 -0.99311,2.14457 -0.0919,19.33019 -9.31706,10.86949 -39.08327,-0.13542 -9.11309,8.6391 -0.13708,8.36743 -0.37733,0.8142 -6.32655,0.0782 -1.55571,0.0652 -13.20606,5.45933 0.27168,25.24351 5.3311,11.9529 -5.80675,8.03383 -31.25257,-0.27003 -9.92648,11.88188 -7.69443,7.62672 -7.0875,0.0685 -0.52346,-1.0231 0.11718,-13.49626 -1.39964,-2.62012 -2.8794,-3.43599 -2.43766,-2.70271 -2.06611,-2.63997 -1.35995,-3.1652 -0.13224,-1.2328 1.33747,-3.29312 1.8492,-5.68208 -8.64159,-9.4525 -1.48555,-5.46901 -3.1734,-10.32531 -9.98757,0.0677 -12.37921,-8.54413 -0.44817,-0.91001 0.14364,-14.22498 0.54873,-0.81644 12.91795,-5.14134 -0.0612,-22.26834 -8.43588,-13.67934 0.0173,-13.92434 7.65642,-13.28293 9.24206,-4.23409 4.24476,-2.17542 3.01849,-2.20865 2.02449,-2.25791 2.94692,-5.03419 2.30739,-4.3573 1.78188,-2.90102 1.4364,-1.94753 1.52438,-1.7159 2.7496,-2.35634 2.06295,-1.12723 3.16412,-1.27602 3.6171,-1.74213 2.85442,-2.22134 1.84511,-2.14692 1.79566,-3.6633 0.36125,-2.10705 0.16563,-2.33465 -0.006,-1.56409 -0.64426,-3.69581 -0.53531,-1.49013 -0.38889,-0.80385 -0.44608,-1.00097 0.41605,-0.82267 4.23769,-4.07902 2.58155,-3.15758 1.27865,-2.17231 0.58686,-1.49169 0.62278,-4.6204 0.1433,-7.43102 5.94053,-10.26091
z`,
    id: "region10",
    photo: `${photo10}`,
    pattern: "hoverPattern10"
  },
  {
    region: `m 675.33735,430.58275 10.12716,9.38694 3.50431,2.60712 17.05318,7.43997 0.21498,0.90963 -3.48907,4.91925 -5.38552,7.86763 -0.99696,3.78871 -0.50013,2.21131 0.1224,2.86253 0.7855,3.72994 1.43378,2.55169 1.24281,1.53867 2.06384,1.93506 5.29274,3.93916 4.31076,3.42618 3.82186,3.09693 4.30745,6.85061 3.49137,5.26192 1.32529,2.06954 -0.091,1.04786 -0.67402,0.93529 -13.86336,-0.0317 -4.51163,0.0278 -0.66643,7.46491 -23.74393,5.87464 -12.63129,1.5217 -10.55326,1.26168 -14.94161,4.34452 -2.37868,0.67463 -0.89878,-0.76479 -0.17148,-1.13487 -0.0134,-11.3811 -0.79281,-0.12249 -9.65742,5.43852 -1.47241,0.64348 -0.92937,-0.35415 -7.8268,-6.50729 -13.42269,-0.0479 -12.83476,7.11249 -28.00341,0.0488 -1.2498,-0.28828 -0.55854,-0.55725 -6.44995,-13.14877 -10.0866,0.0541 -1.3357,-0.34742 -0.76328,-0.5552 -6.87061,-13.6704 -0.24577,-0.9454 0.60194,-0.84595 7.33007,-0.31391 11.3686,-8.03116 19.01635,-4.92195 -0.74168,-9.25784 0.59215,-0.32835 33.28195,0.0785 5.73631,-2.28716 9.07101,-6.16377 5.4141,-4.46737 4.6679,-4.58891 4.22588,-4.91424 2.34292,-3.33435 1.45003,-2.90907 1.22594,-3.17875 1.34641,-2.69705 1.89003,-1.82357 2.09246,-0.0572 2.27744,1.47161 2.4538,1.96289 2.93373,2.11727 2.56806,0.071 4.15343,-1.51791 12.22137,-7.30954
z`,
    id: "region11",
    photo: `${photo11}`,
    pattern: "hoverPattern11"
  },
  {
    region: `m 482.89835,346.71206 2.06443,-10.98617 -8.06768,-13.59197 2.29643,-13.70932 12.0495,-13.63644 65.60566,15.77873 64.9843,-23.62103 19.88096,13.04282 9.67583,-1.24571 3.29762,-0.38323 2.07076,-0.16701 1.88772,0.69568 8.11385,3.98981 4.35371,2.21297 2.47564,1.08739 2.9458,1.21373 4.16989,1.25859 4.97597,0.068 10.25875,-0.10059 6.03816,-0.0337 2.90778,-0.0856 0.6345,-0.5254 1.02792,-0.59585 1.47512,-0.70699 1.6091,-0.64945 5.47695,-1.87764 5.22956,-1.50885 6.46569,-1.59617 3.37084,-0.68489 1.43185,-0.2422 1.50526,-0.12199 17.72988,2.78679 2.68791,1.11036 2.70556,1.44956 1.88225,1.1364 1.52524,0.90142 1.53433,1.03713 1.37449,0.92736 1.25675,0.77898 1.82338,1.03059 1.54482,0.6676 0.8403,0.32919 1.23942,0.26032 1.28216,0.24171 1.62789,0.002 1.38805,-0.17776 1.42241,-0.3652 1.16161,-0.36742 1.44339,-0.59198 1.8611,-0.97011 2.11772,-1.30845 1.59292,-1.10129 1.77358,-1.30685 7.50769,-5.67215 0.79057,-0.56358 0.52146,-0.39143 0.68035,-0.0969 0.76796,0.25096 4.24598,3.86627 1.24275,1.50433 0.73052,1.13602 0.75895,1.17802 1.14475,2.26343 0.82405,2.07882 2.57212,7.07035 0.0346,0.35411 5.84181,8.13709 -0.60842,14.44286 -3.21315,1.02764 -1.58256,0.60547 -0.7467,0.47827 -0.11367,0.22495 -6.31954,6.3061 0.70064,4.08002 0.0226,17.68319 5.58779,9.30796 0.20089,0.26783 0.33082,0.0321 7.64493,0.002 0.65522,0.23172 11.68671,10.22985 0.36057,0.31599 5.52982,9.22993 0.17592,0.63682 -0.0656,0.6421 -0.32415,0.43577 -0.46334,0.51696 -1.03371,1.47022 -0.3842,0.62357 -0.76708,1.35407 -0.64171,1.80335 -0.16481,1.45839 0.084,1.3785 0.20519,0.86613 0.79839,2.1889 0.44611,0.91511 0.24268,0.50955 2.01398,3.10904 1.35961,1.91444 1.69693,2.6155 1.77182,3.05911 0.81247,1.82251 0.48259,1.22351 0.13032,1.26993 -0.0471,0.84512 -0.10006,0.62919 -0.48349,1.58906 -0.88313,1.4914 -0.84731,1.21851 -0.74746,0.87381 -3.07345,3.5267 -5.8864,9.33032 -11.61375,7.30628 -1.21197,-0.011 -8.09573,-7.23538 -10.92572,0.0106 -0.51471,0.34527 0.0302,0.74914 -0.0244,15.59632 -0.21841,0.82793 -0.58734,0.51774 -32.08171,-0.0166 -12.17266,8.33705 -7.58208,10.51832 -0.715,0.54026 -0.91392,0.13462 -13.36428,-0.015 -0.54763,-0.0622 -3.32324,-2.06327 -3.2019,-2.01986 -5.27006,-3.39006 -4.07275,-2.72765 -1.38398,-1.75701 -0.93209,-1.60254 -0.61081,-2.14579 0.0423,-3.42233 0.80061,-3.08328 1.35012,-2.96078 1.39909,-2.65062 3.42512,-5.07823 1.86874,-2.92399 0.82344,-1.56508 0.31207,-0.55365 0.14422,-0.87573 -0.26559,-0.94948 -0.87274,-1.3538 -1.65441,-1.44051 -1.11726,-0.74458 -2.0374,-1.1985 -2.32687,-1.13765 -3.43653,-1.34312 -3.31121,-1.3999 -1.94324,-0.81068 -3.66319,-2.42579 -3.47163,-2.65666 -3.50062,-2.82363 -3.01844,-2.56132 -4.90045,-4.59217 -0.2054,-0.52424 -0.0469,-2.60808 -0.18757,-1.80913 -0.44013,-1.94548 -0.39252,-1.28723 -1.35791,-2.86504 -1.00159,-2.55101 -0.69944,-2.90732 -0.20848,-4.10709 -0.19697,-0.55508 -1.86134,-0.31288 -3.11219,-0.66159 -2.99563,-0.574 -2.26262,-0.73069 -2.6612,-0.87259 -2.34569,-1.29786 -8.3261,-5.52449 -5.38809,-0.11419 -11.37067,0.0868 -11.68303,-1.847 -3.74846,-1.07143 -3.49754,-1.46101 -4.32536,-2.93492 -3.50533,-3.26785 -2.85555,-14.3715 -0.67803,-2.232 -0.96863,-2.44234 -0.63891,-0.98093 -0.93576,-1.08415 -1.16987,-0.56069 -1.27498,-0.2753 -1.7641,0.0563 -2.29081,0.47945 -3.102,1.22064 -3.24561,1.74551 -4.28137,2.74525 -7.81326,5.90426 -5.28931,4.13885 -10.64584,-0.14259 -13.70174,-0.95807 -4.38962,-0.78413 -4.3646,-1.0208 -3.55429,-1.45805 -1.82976,-0.998 -1.53167,-1.65557 -0.82658,-2.28016 -0.0341,-3.41705 0.0273,-3.37402 0.11629,-1.45269 -0.006,-0.81848 -0.19516,-1.03327 -0.46653,-1.218 -0.9581,-1.29777 -1.20998,-0.78173 -1.19271,-0.35689 -2.14051,-0.34693 -2.88917,0.063 -3.26784,0.3215 -5.42361,0.87881 -1.74344,0.39863 -6.32518,0.89481 -6.25953,0.96866
z`,
    id: "region12",
    photo: `${photo12}`,
    pattern: "hoverPattern12"
  },
  {
    region: `m 371.96927,373.42432 -0.56804,-0.32496 -0.25633,-0.27037 -0.15631,-0.3226 -0.0821,-0.57363 0.0233,-8.15959 0.0597,-0.46143 0.47021,-0.67089 3.27502,-4.90512 1.43403,-2.06824 1.38737,-1.72488 0.87673,-1.04033 0.5745,-0.4689 0.45549,-0.28929 0.42005,-0.13268 0.77974,0.13789 3.57791,0.48199 6.49852,0.85561 1.68711,0.21776 1.29176,0.0297 2.65814,0.091 3.19228,0.25597 3.86078,0.37629 3.93801,0.47635 4.38996,0.32814 1.16152,0.0439 2.78061,-0.0518 2.15391,-0.19039 1.34693,-0.21516 1.73282,-0.41522 2.21809,-0.67636 2.2547,-0.81452 1.14605,-0.43805 3.40629,-1.36693 2.49744,-0.93533 3.87506,-1.22766 14.23824,2.88011 0.86334,0.19165 0.35714,0.0315 0.33756,0.15823 0.1679,0.0681 0.94374,0.99279 0.69844,0.65347 0.83005,0.74309 1.00367,0.82482 0.73028,0.53726 2.00159,1.10514 0.75026,0.21481 0.53179,0.16068 0.54629,0.0409 0.52665,-0.0513 0.53951,-0.18406 0.51056,-0.33824 1.87612,-1.65424 3.65204,-3.34472 1.6507,-1.4208 2.29174,-2.09422 1.56963,-1.29071 0.3479,-0.21902 0.29272,-0.002 22.4364,15.3666 1.024,0.74153 3.75195,-0.12471 4.04469,-0.3696 2.14882,-0.31824 6.47059,-0.84974 3.44905,-0.43038 3.89983,-0.31602 3.57019,-0.0183 -0.62268,11.8283 5.07609,6.17837 3.462,3.16266 0.95882,0.76657 1.14256,0.70874 0.98525,0.5532 1.58656,0.78231 1.24757,0.55737 3.26835,0.87452 4.9457,0.71375 5.15607,0.0814 11.09991,-0.62833 12.1915,-0.60201 10.91245,-7.128 6.16181,-5.46405 1.5072,-1.17727 1.5225,-0.89785 1.14022,-0.25467 0.972,3.9e-4 0.89863,0.49205 0.89499,0.99698 0.62314,1.87788 0.41644,3.07289 0.0754,2.25167 -0.2421,6.53133 3.13705,4.18248 2.95319,3.11739 1.62689,1.39547 1.55357,1.2511 1.52439,0.98831 2.52683,1.40911 3.21135,1.32495 4.04116,1.10419 3.4287,0.60356 4.56161,0.48845 4.68913,0.19431 5.67824,0.0873 0.97332,-0.0332 4.4129,0.28378 4.55591,0.88436 3.47322,1.40813 2.10454,0.95445 2.56847,1.64873 12.52842,9.72524 0.76683,0.63989 0.17909,0.74539 -0.16974,2.64707 -0.50835,1.9457 -0.6061,1.32912 -1.50685,1.82918 -2.05946,1.4039 -2.79963,0.6662 -2.89713,0.10836 -3.32986,-0.18383 -2.72858,-0.44073 -4.85546,-1.08835 -3.95519,-0.83585 -2.65258,-0.26359 -0.90944,0.0978 -0.60509,0.0825 -0.44663,0.35091 -0.53593,0.65032 -2.96858,4.92529 -2.91247,5.44586 -1.09277,1.9676 -1.38696,1.97629 -1.578,2.03815 -2.97772,3.27028 -3.75228,3.52554 -4.92648,3.85466 -2.18323,1.60209 -4.09852,2.5355 -2.75922,1.48268 -3.09939,1.31854 -2.0098,0.6419 -2.33181,0.55211 -1.94158,0.15336 -7.459,-0.005 -25.79348,0.0241 -0.52454,0.096 -0.1267,0.3337 0.003,8.61777 -0.16564,0.85259 -0.62518,0.48484 -0.69765,0.0984 -11.41492,0.038 -0.71936,-0.17527 -0.40592,-0.43941 -0.43045,-0.65152 -1.60429,-2.62185 -0.92511,-1.43121 -2.36912,-3.88828 -0.41101,-0.63066 -0.66234,-0.0363 -0.32405,0.50384 -14.38043,14.80758 -0.5804,0.33711 -0.5276,0.18501 -13.20069,0.0103 -19.45979,-5.99426 -11.77367,5.90671 -8.31381,7.39965 0.0173,13.34029 -0.111,0.6928 -8.15316,11.74051 -5.77485,6.77642 -10.51987,8.97167 -5.73998,12.93322 -0.5257,0.56253 -0.64636,0.19825 -7.24794,-0.003 -0.46439,0.0812 -0.1934,0.26775 -6.73135,11.01961 -12.09169,8.13535 -6.76919,6.2291 -0.14815,0.38441 0.0991,0.28705 6.90832,7.80309 4.7514,8.50439 0.18102,0.70071 -0.0909,0.70051 -4.34375,5.16855 -0.49922,0.50016 -0.65624,0.23583 -6.43653,-0.0259 -0.74637,-0.41718 -0.37759,-0.59204 -0.0431,-4.77885 -0.07,-0.39936 -0.26625,-0.14796 -16.29851,-8.68691 -7.19651,0.0356 -6.16923,7.98099 -0.76315,0.80908 -0.62172,0.18126 -14.04524,0.0352 -8.62034,5.7598 -0.70055,0.2268 -16.90706,-0.0196 -0.66122,-0.10723 -8.59565,-5.71206 -0.50488,-0.60095 -0.0903,-16.49139 0.16733,-0.76069 0.43226,-0.49298 0.67742,-0.20934 7.16842,0.008 0.47034,-0.1662 0.12106,-0.46279 -0.006,-5.36406 0.0653,-0.66644 0.31052,-0.52731 7.43101,-7.32639 0.48874,-0.41517 0.48078,-0.1698 17.28345,0.10094 0.40912,-0.25899 0.0414,-0.40992 -0.0381,-22.91384 0.10338,-0.71854 0.42152,-0.44152 0.7058,-0.30757 5.27612,0.0322 0.39494,-0.0879 0.15832,-0.25093 6.94223,-7.81828 0.0861,-0.30984 -0.007,-0.25245 -7.025,-6.10772 -0.43918,-0.51443 -0.19845,-0.91193 0.12997,-10.78972 -1.06686,-1.79333 -0.91248,-2.15385 -1.11688,-3.09396 -0.4216,-1.632 -0.1163,-1.82391 0.33856,-1.86878 0.83975,-1.23863 1.05215,-0.56821 1.0975,-0.25475 22.6159,-0.0334 0.70904,0.0338 0.74205,0.5273 8.24738,7.33605 0.44405,0.10783 14.348,-0.0685 0.8653,0.20157 4.8539,5.70222 0.25242,0.17381 6.51366,-0.0685 6.07172,-5.22004 0.16027,-0.2655 -0.001,-0.33968 -12.06774,-13.46797 -0.81293,-0.81493 -0.31061,-0.74646 0.1864,-0.8263 1.11965,-0.93029 5.29443,-4.63236 -0.0388,-10.06598 -4.06569,-3.14116 -2.57589,-1.84649 -5.04379,-3.78858 -7.64817,-7.13289 -4.08913,-8.52608 -0.0471,-2.5185 0.0619,-9.67212 -3.84584,-11.84605 -0.32501,-0.26947 -0.46907,0.0356 -7.68149,-0.0629 -0.56593,-0.0922 -13.45937,-9.29168 -0.36488,-0.37008 -0.20089,-0.5828 0.0427,-0.50072 0.25293,-0.56485 0.56856,-0.52051 2.82985,-2.40683 2.87376,-2.46331 7.29356,-10.20892 0.0118,-0.27889 0.0124,-6.19275 -0.0712,-0.28469 -0.35954,-0.27734 -6.75814,-5.4015 -13.77228,-0.0163
z`,
    id: "region13",
    photo: `${photo13}`,
    pattern: "hoverPattern13"
  },
  {
    region: `m 577.0409,576.77087
v -2.70023
l 15.9314,-9.99088 11.341,-10.80096
h 13.77122
l 8.36991,-9.71672 18.88347,-4.85464 4.47921,-2.04809 0.12443,-3.6282 8.67501,-3.21839 9.2411,-0.71753 6.39265,-1.46704 13.50036,-2.70189 15.39136,-2.70024 0.27003,13.77122 8.37073,6.21055
h 12.96115
l -0.27003,23.76209 8.64077,7.02062 29.97264,-0.27002 16.20225,-6.20972 35.10227,-8.3e-4 1.20125,0.25173 0.26834,1.21524 -0.65786,1.2374 -9.11227,5.06109 0.1346,14.04124 -0.3824,2.17822 -0.76623,0.86058 -2.90173,3.10569 -3.17257,1.61931 -3.91576,1.55409 -3.1734,0.54005 -11.40623,10.12382 -1.01321,0.67713 -1.15116,-0.44353 -6.94956,-8.87023 -1.72727,-1.33949 -9.2058,0.12231 -3.5805,1.01156 -3.24277,1.89099 -2.15771,2.15854 -2.16102,3.24111 -1.01403,2.76878 -6.88437,-0.20231 -7.76215,8.50534 -8.91244,0.27167 -12.42275,8.37075 -15.15113,0.0966 0.0323,11.51112 -0.38293,0.8551 -22.31492,15.50888 -22.93783,0.38081 -12.02138,-6.20915 -0.52201,-1.03882 4.32883,-9.19286 0.11302,-12.45254 8.37156,-8.37158 -8.09989,-8.3699 -4.86373,-10.53093 -12.69029,-0.27168 -8.64159,-9.99006 -12.95701,0.27002 -12.96528,-7.559 -11.06932,-0.8109
z`,
    id: "region14",
    photo: `${photo14}`,
    pattern: "hoverPattern14"
  },
];

const pattern = [
  "hoverPattern5",
  "hoverPattern1",
  "hoverPattern7",
  "hoverPattern11",
  "hoverPattern3",
  "hoverPattern12",
  "hoverPattern6",
  "hoverPattern14",
  "hoverPattern8",
  "hoverPattern2",
  "hoverPattern10",
  "hoverPattern4",
  "hoverPattern13",
  "hoverPattern9",
]

export const MapCatalogue = () => {
  const isLightTheme = useSelector(getLightTheme);
  const map = isLightTheme ? mapLight : mapDark;
  const [onButtonClick, setOnButtonClick] = useState(false);

  const calcRegion = (region, pattern) => {
    const regionPath = document.getElementById(region);
    const regionWidth = regionPath?.getBBox().width;
    const regionHeight = regionPath?.getBBox().height;

    const hoverPattern = document.getElementById(pattern);
    const imageElement = hoverPattern?.querySelector("image");
    imageElement?.setAttribute("width", regionWidth);
    imageElement?.setAttribute("height", regionHeight);
  };

  useEffect(() => {
    catalogue.map((item) => {
      calcRegion(item.id, item.pattern);
    })
  }, []);


  useEffect(() => {
    const delay = 500;

    const runPattern = async () => {
      for (const item of pattern) {
        await new Promise((resolve) => {
          setTimeout(() => {
            handleRegionHover(item);
            resolve();
          }, delay);
        });

        await new Promise((resolve) => {
          setTimeout(() => {
            handleRegionOut(item);
            resolve();
          }, delay);
        });
      }
    };

    runPattern();
  }, [isLightTheme]);

  const handleRegionHover = (pattern) => {
    const hoverPattern = document.getElementById(pattern);
    if (hoverPattern) {
      const imageElement = hoverPattern.querySelector("image");
      if (imageElement) {
        imageElement.classList.add('map-opacity_visible')
      }
    }
  };

  const handleRegionOut = (pattern) => {
    const hoverPattern = document.getElementById(pattern);
    if (hoverPattern) {
      const imageElement = hoverPattern.querySelector("image");
      if (imageElement) {
        imageElement.classList.remove('map-opacity_visible')
      }
    }
  };

  const mapRegion = catalogue.map((item) => (
    <React.Fragment key={item.id}>
      <defs >
        <pattern id={item.pattern} x="0" y="0" width="100%" height="100%">
          <image href={item.photo} className="map-opacity_hide" />
        </pattern>
      </defs>

      <NavLink onClick={() => { handleRegionHover(item.pattern); setOnButtonClick(true) }} className="nav" to="/player">
        <path className="path-map"
          id={item.id}
          onMouseOver={() => handleRegionHover(item.pattern)}
          onMouseOut={() => onButtonClick ? null : handleRegionOut(item.pattern)}
          d={item.region}
          style={{ fill: `url(#${item.pattern})`, objectFit: "cover" }}
        />
      </NavLink>
    </React.Fragment>))

  return <section id="map" className="map-catalogue" >
    {" "}
    <div className="map">
      <svg className="svg-map" viewBox="0 0 990 655">
        {mapRegion}
      </svg>
      <img className="img-map" src={map} alt="Map" />
    </div>
    <Outlet />
  </section>
};
