(function () {
  'use strict';

  var earthPositions = {
    0: {
      x: 432,
      y: 1
    },
    1: {
      x: 312,
      y: 5
    },
    2: {
      x: 337,
      y: 10
    },
    3: {
      x: 360,
      y: 11
    },
    4: {
      x: 257,
      y: 12
    },
    5: {
      x: 462,
      y: 17
    },
    6: {
      x: 493,
      y: 17
    },
    7: {
      x: 835,
      y: 20
    },
    8: {
      x: 316,
      y: 23
    },
    9: {
      x: 397,
      y: 24
    },
    10: {
      x: 594,
      y: 26
    },
    11: {
      x: 319,
      y: 27
    },
    12: {
      x: 618,
      y: 28
    },
    13: {
      x: 226,
      y: 29
    },
    14: {
      x: 435,
      y: 29
    },
    15: {
      x: 823,
      y: 29
    },
    16: {
      x: 568,
      y: 31
    },
    17: {
      x: 198,
      y: 33
    },
    18: {
      x: 295,
      y: 34
    },
    19: {
      x: 596,
      y: 35
    },
    20: {
      x: 360,
      y: 37
    },
    21: {
      x: 466,
      y: 37
    },
    22: {
      x: 181,
      y: 38
    },
    23: {
      x: 867,
      y: 38
    },
    24: {
      x: 302,
      y: 40
    },
    25: {
      x: 252,
      y: 41
    },
    26: {
      x: 850,
      y: 41
    },
    27: {
      x: 217,
      y: 44
    },
    28: {
      x: 864,
      y: 44
    },
    29: {
      x: 164,
      y: 46
    },
    30: {
      x: 607,
      y: 46
    },
    31: {
      x: 585,
      y: 50
    },
    32: {
      x: 751,
      y: 50
    },
    33: {
      x: 187,
      y: 51
    },
    34: {
      x: 283,
      y: 51
    },
    35: {
      x: 219,
      y: 52
    },
    36: {
      x: 314,
      y: 54
    },
    37: {
      x: 142,
      y: 55
    },
    38: {
      x: 727,
      y: 55
    },
    39: {
      x: 894,
      y: 56
    },
    40: {
      x: 972,
      y: 56
    },
    41: {
      x: 344,
      y: 57
    },
    42: {
      x: 824,
      y: 58
    },
    43: {
      x: 398,
      y: 59
    },
    44: {
      x: 440,
      y: 60
    },
    45: {
      x: 475,
      y: 61
    },
    46: {
      x: 1011,
      y: 62
    },
    47: {
      x: 196,
      y: 62
    },
    48: {
      x: 215,
      y: 62
    },
    49: {
      x: 279,
      y: 62
    },
    50: {
      x: 712,
      y: 62
    },
    51: {
      x: 235,
      y: 63
    },
    52: {
      x: 724,
      y: 63
    },
    53: {
      x: 973,
      y: 64
    },
    54: {
      x: 245,
      y: 65
    },
    55: {
      x: 174,
      y: 66
    },
    56: {
      x: 137,
      y: 67
    },
    57: {
      x: 245,
      y: 69
    },
    58: {
      x: 164,
      y: 70
    },
    59: {
      x: 223,
      y: 70
    },
    60: {
      x: 230,
      y: 70
    },
    61: {
      x: 261,
      y: 70
    },
    62: {
      x: 201,
      y: 71
    },
    63: {
      x: 895,
      y: 71
    },
    64: {
      x: 925,
      y: 71
    },
    65: {
      x: 285,
      y: 72
    },
    66: {
      x: 789,
      y: 72
    },
    67: {
      x: 757,
      y: 73
    },
    68: {
      x: 870,
      y: 74
    },
    69: {
      x: 942,
      y: 74
    },
    70: {
      x: 207,
      y: 75
    },
    71: {
      x: 359,
      y: 76
    },
    72: {
      x: 980,
      y: 76
    },
    73: {
      x: 248,
      y: 77
    },
    74: {
      x: 134,
      y: 80
    },
    75: {
      x: 709,
      y: 80
    },
    76: {
      x: 697,
      y: 81
    },
    77: {
      x: 234,
      y: 82
    },
    78: {
      x: 221,
      y: 83
    },
    79: {
      x: 846,
      y: 84
    },
    80: {
      x: 36,
      y: 86
    },
    81: {
      x: 435,
      y: 86
    },
    82: {
      x: 620,
      y: 86
    },
    83: {
      x: 308,
      y: 87
    },
    84: {
      x: 1017,
      y: 88
    },
    85: {
      x: 249,
      y: 88
    },
    86: {
      x: 714,
      y: 88
    },
    87: {
      x: 950,
      y: 88
    },
    88: {
      x: 127,
      y: 90
    },
    89: {
      x: 462,
      y: 91
    },
    90: {
      x: 721,
      y: 91
    },
    91: {
      x: 1075,
      y: 92
    },
    92: {
      x: 226,
      y: 92
    },
    93: {
      x: 283,
      y: 92
    },
    94: {
      x: 262,
      y: 93
    },
    95: {
      x: 359,
      y: 93
    },
    96: {
      x: 211,
      y: 94
    },
    97: {
      x: 1045,
      y: 95
    },
    98: {
      x: 589,
      y: 96
    },
    99: {
      x: 641,
      y: 96
    },
    100: {
      x: 100,
      y: 98
    },
    101: {
      x: 274,
      y: 98
    },
    102: {
      x: 704,
      y: 98
    },
    103: {
      x: 174,
      y: 99
    },
    104: {
      x: 723,
      y: 99
    },
    105: {
      x: 195,
      y: 100
    },
    106: {
      x: 4,
      y: 100
    },
    107: {
      x: 1110,
      y: 101
    },
    108: {
      x: 672,
      y: 101
    },
    109: {
      x: 750,
      y: 101
    },
    110: {
      x: 976,
      y: 102
    },
    111: {
      x: 167,
      y: 103
    },
    112: {
      x: 323,
      y: 103
    },
    113: {
      x: 885,
      y: 104
    },
    114: {
      x: 225,
      y: 105
    },
    115: {
      x: 391,
      y: 105
    },
    116: {
      x: 664,
      y: 106
    },
    117: {
      x: 256,
      y: 107
    },
    118: {
      x: 303,
      y: 107
    },
    119: {
      x: 801,
      y: 107
    },
    120: {
      x: 57,
      y: 108
    },
    121: {
      x: 684,
      y: 108
    },
    122: {
      x: 637,
      y: 110
    },
    123: {
      x: 336,
      y: 112
    },
    124: {
      x: 481,
      y: 112
    },
    125: {
      x: 922,
      y: 112
    },
    126: {
      x: 1020,
      y: 113
    },
    127: {
      x: 1136,
      y: 113
    },
    128: {
      x: 266,
      y: 113
    },
    129: {
      x: 457,
      y: 113
    },
    130: {
      x: 654,
      y: 113
    },
    131: {
      x: 672,
      y: 113
    },
    132: {
      x: 1069,
      y: 114
    },
    133: {
      x: 1107,
      y: 114
    },
    134: {
      x: 364,
      y: 115
    },
    135: {
      x: 1,
      y: 116
    },
    136: {
      x: 602,
      y: 116
    },
    137: {
      x: 614,
      y: 118
    },
    138: {
      x: 117,
      y: 119
    },
    139: {
      x: 404,
      y: 119
    },
    140: {
      x: 570,
      y: 119
    },
    141: {
      x: 285,
      y: 121
    },
    142: {
      x: 488,
      y: 121
    },
    143: {
      x: 1126,
      y: 122
    },
    144: {
      x: 220,
      y: 123
    },
    145: {
      x: 652,
      y: 125
    },
    146: {
      x: 840,
      y: 125
    },
    147: {
      x: 726,
      y: 126
    },
    148: {
      x: 245,
      y: 127
    },
    149: {
      x: 469,
      y: 127
    },
    150: {
      x: 81,
      y: 127
    },
    151: {
      x: 43,
      y: 128
    },
    152: {
      x: 167,
      y: 129
    },
    153: {
      x: 600,
      y: 130
    },
    154: {
      x: 1056,
      y: 131
    },
    155: {
      x: 1102,
      y: 132
    },
    156: {
      x: 682,
      y: 132
    },
    157: {
      x: 284,
      y: 133
    },
    158: {
      x: 323,
      y: 134
    },
    159: {
      x: 587,
      y: 134
    },
    160: {
      x: 756,
      y: 134
    },
    161: {
      x: 1032,
      y: 135
    },
    162: {
      x: 549,
      y: 135
    },
    163: {
      x: 6,
      y: 136
    },
    164: {
      x: 964,
      y: 138
    },
    165: {
      x: 62,
      y: 140
    },
    166: {
      x: 327,
      y: 143
    },
    167: {
      x: 394,
      y: 143
    },
    168: {
      x: 605,
      y: 143
    },
    169: {
      x: 1054,
      y: 144
    },
    170: {
      x: 625,
      y: 144
    },
    171: {
      x: 593,
      y: 145
    },
    172: {
      x: 129,
      y: 146
    },
    173: {
      x: 88,
      y: 146
    },
    174: {
      x: 567,
      y: 147
    },
    175: {
      x: 783,
      y: 147
    },
    176: {
      x: 986,
      y: 148
    },
    177: {
      x: 1017,
      y: 149
    },
    178: {
      x: 233,
      y: 149
    },
    179: {
      x: 27,
      y: 149
    },
    180: {
      x: 523,
      y: 149
    },
    181: {
      x: 648,
      y: 150
    },
    182: {
      x: 190,
      y: 151
    },
    183: {
      x: 608,
      y: 151
    },
    184: {
      x: 557,
      y: 153
    },
    185: {
      x: 719,
      y: 153
    },
    186: {
      x: 566,
      y: 155
    },
    187: {
      x: 512,
      y: 156
    },
    188: {
      x: 869,
      y: 156
    },
    189: {
      x: 828,
      y: 157
    },
    190: {
      x: 918,
      y: 157
    },
    191: {
      x: 586,
      y: 158
    },
    192: {
      x: 558,
      y: 160
    },
    193: {
      x: 1027,
      y: 161
    },
    194: {
      x: 289,
      y: 161
    },
    195: {
      x: 154,
      y: 163
    },
    196: {
      x: 574,
      y: 163
    },
    197: {
      x: 511,
      y: 165
    },
    198: {
      x: 271,
      y: 166
    },
    199: {
      x: 113,
      y: 167
    },
    200: {
      x: 683,
      y: 167
    },
    201: {
      x: 13,
      y: 168
    },
    202: {
      x: 528,
      y: 168
    },
    203: {
      x: 596,
      y: 168
    },
    204: {
      x: 752,
      y: 168
    },
    205: {
      x: 963,
      y: 168
    },
    206: {
      x: 319,
      y: 169
    },
    207: {
      x: 523,
      y: 171
    },
    208: {
      x: 568,
      y: 171
    },
    209: {
      x: 975,
      y: 171
    },
    210: {
      x: 560,
      y: 172
    },
    211: {
      x: 629,
      y: 172
    },
    212: {
      x: 985,
      y: 172
    },
    213: {
      x: 355,
      y: 177
    },
    214: {
      x: 791,
      y: 177
    },
    215: {
      x: 243,
      y: 178
    },
    216: {
      x: 512,
      y: 178
    },
    217: {
      x: 981,
      y: 179
    },
    218: {
      x: 215,
      y: 180
    },
    219: {
      x: 501,
      y: 181
    },
    220: {
      x: 536,
      y: 181
    },
    221: {
      x: 1030,
      y: 184
    },
    222: {
      x: 726,
      y: 184
    },
    223: {
      x: 342,
      y: 185
    },
    224: {
      x: 538,
      y: 185
    },
    225: {
      x: 516,
      y: 187
    },
    226: {
      x: 653,
      y: 187
    },
    227: {
      x: 171,
      y: 188
    },
    228: {
      x: 529,
      y: 191
    },
    229: {
      x: 835,
      y: 191
    },
    230: {
      x: 933,
      y: 191
    },
    231: {
      x: 316,
      y: 192
    },
    232: {
      x: 604,
      y: 192
    },
    233: {
      x: 990,
      y: 192
    },
    234: {
      x: 136,
      y: 194
    },
    235: {
      x: 977,
      y: 194
    },
    236: {
      x: 297,
      y: 195
    },
    237: {
      x: 518,
      y: 195
    },
    238: {
      x: 882,
      y: 196
    },
    239: {
      x: 362,
      y: 198
    },
    240: {
      x: 755,
      y: 199
    },
    241: {
      x: 701,
      y: 201
    },
    242: {
      x: 632,
      y: 202
    },
    243: {
      x: 340,
      y: 203
    },
    244: {
      x: 984,
      y: 204
    },
    245: {
      x: 686,
      y: 205
    },
    246: {
      x: 259,
      y: 207
    },
    247: {
      x: 571,
      y: 207
    },
    248: {
      x: 649,
      y: 207
    },
    249: {
      x: 983,
      y: 208
    },
    250: {
      x: 561,
      y: 210
    },
    251: {
      x: 639,
      y: 210
    },
    252: {
      x: 694,
      y: 210
    },
    253: {
      x: 788,
      y: 210
    },
    254: {
      x: 994,
      y: 213
    },
    255: {
      x: 207,
      y: 214
    },
    256: {
      x: 527,
      y: 214
    },
    257: {
      x: 546,
      y: 214
    },
    258: {
      x: 505,
      y: 215
    },
    259: {
      x: 952,
      y: 215
    },
    260: {
      x: 960,
      y: 215
    },
    261: {
      x: 683,
      y: 216
    },
    262: {
      x: 620,
      y: 218
    },
    263: {
      x: 665,
      y: 218
    },
    264: {
      x: 307,
      y: 220
    },
    265: {
      x: 594,
      y: 221
    },
    266: {
      x: 631,
      y: 223
    },
    267: {
      x: 736,
      y: 223
    },
    268: {
      x: 979,
      y: 223
    },
    269: {
      x: 657,
      y: 224
    },
    270: {
      x: 919,
      y: 224
    },
    271: {
      x: 834,
      y: 225
    },
    272: {
      x: 605,
      y: 226
    },
    273: {
      x: 617,
      y: 226
    },
    274: {
      x: 691,
      y: 226
    },
    275: {
      x: 138,
      y: 227
    },
    276: {
      x: 591,
      y: 227
    },
    277: {
      x: 872,
      y: 227
    },
    278: {
      x: 930,
      y: 229
    },
    279: {
      x: 938,
      y: 230
    },
    280: {
      x: 919,
      y: 231
    },
    281: {
      x: 583,
      y: 232
    },
    282: {
      x: 906,
      y: 232
    },
    283: {
      x: 249,
      y: 235
    },
    284: {
      x: 572,
      y: 235
    },
    285: {
      x: 176,
      y: 236
    },
    286: {
      x: 688,
      y: 236
    },
    287: {
      x: 922,
      y: 237
    },
    288: {
      x: 505,
      y: 238
    },
    289: {
      x: 564,
      y: 238
    },
    290: {
      x: 971,
      y: 238
    },
    291: {
      x: 526,
      y: 239
    },
    292: {
      x: 580,
      y: 239
    },
    293: {
      x: 623,
      y: 239
    },
    294: {
      x: 704,
      y: 239
    },
    295: {
      x: 646,
      y: 240
    },
    296: {
      x: 764,
      y: 240
    },
    297: {
      x: 515,
      y: 241
    },
    298: {
      x: 605,
      y: 241
    },
    299: {
      x: 979,
      y: 243
    },
    300: {
      x: 515,
      y: 245
    },
    301: {
      x: 912,
      y: 245
    },
    302: {
      x: 944,
      y: 245
    },
    303: {
      x: 216,
      y: 246
    },
    304: {
      x: 289,
      y: 246
    },
    305: {
      x: 805,
      y: 247
    },
    306: {
      x: 935,
      y: 248
    },
    307: {
      x: 565,
      y: 250
    },
    308: {
      x: 946,
      y: 251
    },
    309: {
      x: 601,
      y: 254
    },
    310: {
      x: 727,
      y: 255
    },
    311: {
      x: 161,
      y: 256
    },
    312: {
      x: 630,
      y: 258
    },
    313: {
      x: 643,
      y: 258
    },
    314: {
      x: 169,
      y: 259
    },
    315: {
      x: 848,
      y: 259
    },
    316: {
      x: 274,
      y: 260
    },
    317: {
      x: 948,
      y: 260
    },
    318: {
      x: 593,
      y: 262
    },
    319: {
      x: 692,
      y: 263
    },
    320: {
      x: 264,
      y: 264
    },
    321: {
      x: 245,
      y: 266
    },
    322: {
      x: 685,
      y: 266
    },
    323: {
      x: 500,
      y: 267
    },
    324: {
      x: 771,
      y: 267
    },
    325: {
      x: 883,
      y: 269
    },
    326: {
      x: 918,
      y: 269
    },
    327: {
      x: 201,
      y: 270
    },
    328: {
      x: 224,
      y: 270
    },
    329: {
      x: 640,
      y: 271
    },
    330: {
      x: 816,
      y: 271
    },
    331: {
      x: 666,
      y: 273
    },
    332: {
      x: 712,
      y: 273
    },
    333: {
      x: 712,
      y: 278
    },
    334: {
      x: 743,
      y: 279
    },
    335: {
      x: 277,
      y: 280
    },
    336: {
      x: 574,
      y: 281
    },
    337: {
      x: 698,
      y: 284
    },
    338: {
      x: 184,
      y: 287
    },
    339: {
      x: 902,
      y: 287
    },
    340: {
      x: 531,
      y: 288
    },
    341: {
      x: 264,
      y: 289
    },
    342: {
      x: 822,
      y: 289
    },
    343: {
      x: 223,
      y: 290
    },
    344: {
      x: 723,
      y: 290
    },
    345: {
      x: 479,
      y: 292
    },
    346: {
      x: 810,
      y: 292
    },
    347: {
      x: 875,
      y: 292
    },
    348: {
      x: 257,
      y: 293
    },
    349: {
      x: 884,
      y: 293
    },
    350: {
      x: 756,
      y: 294
    },
    351: {
      x: 781,
      y: 294
    },
    352: {
      x: 198,
      y: 297
    },
    353: {
      x: 295,
      y: 297
    },
    354: {
      x: 684,
      y: 298
    },
    355: {
      x: 663,
      y: 299
    },
    356: {
      x: 651,
      y: 300
    },
    357: {
      x: 716,
      y: 300
    },
    358: {
      x: 869,
      y: 300
    },
    359: {
      x: 299,
      y: 302
    },
    360: {
      x: 314,
      y: 302
    },
    361: {
      x: 623,
      y: 302
    },
    362: {
      x: 880,
      y: 302
    },
    363: {
      x: 917,
      y: 302
    },
    364: {
      x: 234,
      y: 303
    },
    365: {
      x: 841,
      y: 308
    },
    366: {
      x: 233,
      y: 310
    },
    367: {
      x: 251,
      y: 310
    },
    368: {
      x: 833,
      y: 310
    },
    369: {
      x: 698,
      y: 311
    },
    370: {
      x: 268,
      y: 313
    },
    371: {
      x: 566,
      y: 313
    },
    372: {
      x: 787,
      y: 313
    },
    373: {
      x: 878,
      y: 313
    },
    374: {
      x: 915,
      y: 314
    },
    375: {
      x: 480,
      y: 319
    },
    376: {
      x: 770,
      y: 319
    },
    377: {
      x: 843,
      y: 320
    },
    378: {
      x: 851,
      y: 320
    },
    379: {
      x: 517,
      y: 321
    },
    380: {
      x: 671,
      y: 321
    },
    381: {
      x: 931,
      y: 322
    },
    382: {
      x: 306,
      y: 323
    },
    383: {
      x: 695,
      y: 324
    },
    384: {
      x: 879,
      y: 324
    },
    385: {
      x: 267,
      y: 327
    },
    386: {
      x: 333,
      y: 328
    },
    387: {
      x: 674,
      y: 328
    },
    388: {
      x: 607,
      y: 330
    },
    389: {
      x: 788,
      y: 332
    },
    390: {
      x: 850,
      y: 333
    },
    391: {
      x: 866,
      y: 333
    },
    392: {
      x: 286,
      y: 334
    },
    393: {
      x: 779,
      y: 335
    },
    394: {
      x: 845,
      y: 336
    },
    395: {
      x: 922,
      y: 337
    },
    396: {
      x: 276,
      y: 338
    },
    397: {
      x: 285,
      y: 338
    },
    398: {
      x: 793,
      y: 340
    },
    399: {
      x: 904,
      y: 341
    },
    400: {
      x: 351,
      y: 343
    },
    401: {
      x: 787,
      y: 343
    },
    402: {
      x: 932,
      y: 343
    },
    403: {
      x: 859,
      y: 344
    },
    404: {
      x: 836,
      y: 346
    },
    405: {
      x: 509,
      y: 347
    },
    406: {
      x: 370,
      y: 348
    },
    407: {
      x: 563,
      y: 349
    },
    408: {
      x: 681,
      y: 352
    },
    409: {
      x: 879,
      y: 357
    },
    410: {
      x: 858,
      y: 358
    },
    411: {
      x: 863,
      y: 358
    },
    412: {
      x: 909,
      y: 358
    },
    413: {
      x: 930,
      y: 358
    },
    414: {
      x: 280,
      y: 359
    },
    415: {
      x: 915,
      y: 359
    },
    416: {
      x: 336,
      y: 360
    },
    417: {
      x: 636,
      y: 360
    },
    418: {
      x: 371,
      y: 362
    },
    419: {
      x: 561,
      y: 365
    },
    420: {
      x: 949,
      y: 365
    },
    421: {
      x: 919,
      y: 368
    },
    422: {
      x: 306,
      y: 370
    },
    423: {
      x: 884,
      y: 371
    },
    424: {
      x: 901,
      y: 373
    },
    425: {
      x: 992,
      y: 374
    },
    426: {
      x: 604,
      y: 375
    },
    427: {
      x: 924,
      y: 377
    },
    428: {
      x: 420,
      y: 378
    },
    429: {
      x: 657,
      y: 378
    },
    430: {
      x: 969,
      y: 378
    },
    431: {
      x: 913,
      y: 379
    },
    432: {
      x: 870,
      y: 380
    },
    433: {
      x: 275,
      y: 381
    },
    434: {
      x: 868,
      y: 383
    },
    435: {
      x: 889,
      y: 384
    },
    436: {
      x: 354,
      y: 387
    },
    437: {
      x: 993,
      y: 387
    },
    438: {
      x: 937,
      y: 388
    },
    439: {
      x: 895,
      y: 389
    },
    440: {
      x: 912,
      y: 389
    },
    441: {
      x: 984,
      y: 391
    },
    442: {
      x: 1011,
      y: 395
    },
    443: {
      x: 924,
      y: 395
    },
    444: {
      x: 986,
      y: 397
    },
    445: {
      x: 577,
      y: 398
    },
    446: {
      x: 323,
      y: 399
    },
    447: {
      x: 638,
      y: 399
    },
    448: {
      x: 950,
      y: 399
    },
    449: {
      x: 690,
      y: 401
    },
    450: {
      x: 967,
      y: 401
    },
    451: {
      x: 409,
      y: 403
    },
    452: {
      x: 384,
      y: 404
    },
    453: {
      x: 292,
      y: 408
    },
    454: {
      x: 662,
      y: 409
    },
    455: {
      x: 963,
      y: 409
    },
    456: {
      x: 673,
      y: 416
    },
    457: {
      x: 922,
      y: 416
    },
    458: {
      x: 571,
      y: 418
    },
    459: {
      x: 978,
      y: 418
    },
    460: {
      x: 600,
      y: 419
    },
    461: {
      x: 689,
      y: 420
    },
    462: {
      x: 310,
      y: 421
    },
    463: {
      x: 337,
      y: 421
    },
    464: {
      x: 997,
      y: 422
    },
    465: {
      x: 643,
      y: 426
    },
    466: {
      x: 361,
      y: 427
    },
    467: {
      x: 939,
      y: 429
    },
    468: {
      x: 894,
      y: 434
    },
    469: {
      x: 399,
      y: 435
    },
    470: {
      x: 671,
      y: 436
    },
    471: {
      x: 981,
      y: 436
    },
    472: {
      x: 615,
      y: 437
    },
    473: {
      x: 645,
      y: 441
    },
    474: {
      x: 682,
      y: 443
    },
    475: {
      x: 378,
      y: 444
    },
    476: {
      x: 920,
      y: 444
    },
    477: {
      x: 1018,
      y: 445
    },
    478: {
      x: 326,
      y: 447
    },
    479: {
      x: 581,
      y: 448
    },
    480: {
      x: 955,
      y: 451
    },
    481: {
      x: 378,
      y: 454
    },
    482: {
      x: 306,
      y: 458
    },
    483: {
      x: 352,
      y: 459
    },
    484: {
      x: 631,
      y: 460
    },
    485: {
      x: 991,
      y: 464
    },
    486: {
      x: 1017,
      y: 466
    },
    487: {
      x: 957,
      y: 468
    },
    488: {
      x: 928,
      y: 470
    },
    489: {
      x: 899,
      y: 474
    },
    490: {
      x: 594,
      y: 476
    },
    491: {
      x: 1083,
      y: 477
    },
    492: {
      x: 359,
      y: 477
    },
    493: {
      x: 322,
      y: 478
    },
    494: {
      x: 1009,
      y: 486
    },
    495: {
      x: 1099,
      y: 487
    },
    496: {
      x: 299,
      y: 488
    },
    497: {
      x: 979,
      y: 489
    },
    498: {
      x: 1088,
      y: 490
    },
    499: {
      x: 346,
      y: 491
    },
    500: {
      x: 1003,
      y: 497
    },
    501: {
      x: 326,
      y: 499
    },
    502: {
      x: 993,
      y: 499
    },
    503: {
      x: 998,
      y: 509
    },
    504: {
      x: 309,
      y: 512
    },
    505: {
      x: 1062,
      y: 518
    },
    506: {
      x: 1074,
      y: 519
    },
    507: {
      x: 323,
      y: 524
    },
    508: {
      x: 293,
      y: 529
    },
    509: {
      x: 313,
      y: 539
    },
    510: {
      x: 303,
      y: 554
    },
    511: {
      x: 325,
      y: 556
    }
  };

  var audio = (() => {
    const elements = {
      fileUpload: document.getElementById("FileUpload"),
      fileDrop: document.getElementById("FileDrop"),
      fileTitle: document.getElementById("FileTitle"),
      audio: document.getElementById("Audio"),
      progressBar: document.getElementById("ProgressBar"),
      audioButton: document.getElementById("AudioButton"),
      circles: document.getElementsByTagName("circle"),
      options: document.getElementById("ChooseInput"),
      optionFileInput: document.querySelector('.ChooseInput-option[data-type="file"]'),
      optionMic: document.querySelector('.ChooseInput-option[data-type="mic"]'),
      thresholdPick: document.getElementById("ThresholdPick"),
      svgContainer: document.getElementById("SvgContainer"),
      svg: document.getElementById("Svg")
    };
    const text = {
      notSupported: "Not supported."
    };
    const classes = {
      playButton: "SongInfo-button--play",
      pauseButton: "SongInfo-button--pause",
      noJs: "NoJs",
      active: "is-active",
      audioSelected: "audio-selected",
      audioActive: "audio-active",
      scaledDown: "scaled-down"
    };
    let threshold = parseInt(elements.thresholdPick.value, 10);
    elements.thresholdPick.addEventListener("input", e => {
      threshold = parseInt(e.target.value, 10);
    });
    const circlesLen = 512;
    const circlesLenFromZero = circlesLen - 1;
    const colorMulti = 320 / circlesLen;
    const micButtonText = elements.optionMic.textContent;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    let context;
    let analyser;
    let dataArray;
    let source;
    let mode = false;
    let init = true;
    let animationFrame;
    let duration;
    let stream;
    let audioInitialized;
    elements.fileDrop.addEventListener("drop", e => dropHandler(e), false);
    elements.fileDrop.addEventListener("dragover", e => dragOverHandler(e), false);
    elements.fileDrop.addEventListener("dragend", e => dragEndHandler(e), false);
    elements.fileUpload.addEventListener("change", e => changeFileHandling(e), false);
    elements.audioButton.addEventListener("click", e => audioButtonHandling(e), false);
    elements.audio.addEventListener("play", playHandling, false);
    elements.audio.addEventListener("pause", pauseHandling, false); // Gets audio file duration

    elements.audio.addEventListener("canplaythrough", () => {
      duration = elements.audio.duration;
    }, false);
    elements.optionFileInput.addEventListener("click", e => {
      const elem = e.target;

      if (!audioInitialized) {
        initAudio();
      }

      if (elem.classList.contains(classes.active)) {
        activateFileInput(true);
      } else {
        deactivateMic();
        activateFileInput(true);
      }
    });
    elements.optionMic.addEventListener("click", e => {
      const elem = e.target;

      if (!audioInitialized) {
        initAudio();
      }

      if (elem.classList.contains(classes.active)) {
        deactivateMic();
      } else {
        deactivateFileInput();
        activateMic();
      }
    });
    /**
     *
     */

    function initAudio() {
      context = new AudioContext();
      analyser = context.createAnalyser();
      dataArray = new Uint8Array(analyser.frequencyBinCount);
      source = context.createMediaElementSource(elements.audio);
      audioInitialized = true;
      source.connect(context.destination);
      source.connect(analyser);
      analyser.fftSize = 2048;
    }
    /* file input
     ********************************************************* */

    /**
     *
     * @param {boolean} openDialog
     */


    function activateFileInput(openDialog) {
      mode = "file";
      elements.optionFileInput.classList.add(classes.active);

      if (openDialog) {
        elements.fileUpload.click();
      }
    }
    /**
     *
     */


    function deactivateFileInput() {
      mode = false;
      elements.optionFileInput.classList.remove(classes.active);
      document.body.classList.remove(classes.audioActive);
      stopFileInputAnalyzing();
    }
    /**
     *
     */


    function stopFileInputAnalyzing() {
      elements.audio.src = "";
      stopDrawing();
    }
    /* mic
     ********************************************************* */

    /**
     *
     */


    function activateMic() {
      mode = "mic";
      init = false;

      try {
        elements.optionMic.textContent = elements.optionMic.getAttribute("data-active-text");
        elements.optionMic.classList.add(classes.active);
        navigator.mediaDevices.getUserMedia({
          audio: true
        }).then(s => {
          stream = s;
          source = context.createMediaStreamSource(stream);
          source.connect(analyser);
          requestAnimationFrame(() => {
            elements.svg.classList.remove(classes.scaledDown);
            document.body.classList.add(classes.audioSelected, classes.audioActive);
            draw();
          });
        });
      } catch (e) {
        alert(text.notSupported);
      }
    }
    /**
     *
     */


    function deactivateMic() {
      if (init) {
        return;
      }

      mode = false;
      document.body.classList.remove(classes.audioActive);
      elements.optionMic.textContent = micButtonText;
      elements.optionMic.classList.remove(classes.active);
      stopMicAnalyzing();
    }
    /**
     *
     */


    function stopMicAnalyzing() {
      if (stream && stream.getTracks()) {
        stream.getTracks().forEach(track => track.stop());
      }

      pauseDrawing();
    }
    /* handling
     ********************************************************* */

    /**
     *
     * @param {Event} e
     */


    function audioButtonHandling(e) {
      e.preventDefault();
      const el = e.target;

      if (el.classList.contains(classes.playButton)) {
        elements.audio.play();
      } else {
        elements.audio.pause();
      }
    }
    /**
     *
     * @param {Event} e
     */


    function changeFileHandling(e) {
      const file = e.target.files[0];
      elements.audio.src = URL.createObjectURL(file);
      elements.fileTitle.textContent = file.name;
      elements.audio.play();
      elements.fileUpload.value = "";
    }
    /**
     *
     */


    function playHandling() {
      requestAnimationFrame(() => {
        elements.svg.classList.remove(classes.scaledDown);
        document.body.classList.add(classes.audioSelected, classes.audioActive);
        elements.audioButton.setAttribute("title", elements.audioButton.getAttribute("data-pause-text"));
        elements.audioButton.classList.remove(classes.playButton);
        elements.audioButton.classList.add(classes.pauseButton);
        draw();
      });
      init = false;
    }
    /**
     *
     */


    function pauseHandling() {
      pauseDrawing();
      elements.audioButton.setAttribute("title", elements.audioButton.getAttribute("data-play-text"));
      elements.audioButton.classList.add(classes.playButton);
      elements.audioButton.classList.remove(classes.pauseButton);
      document.body.classList.remove(classes.audioActive);
      elements.svgContainer.removeAttribute("style");
    }
    /* drag'n'drop
     ********************************************************* */

    /**
     *
     * @param {Event} e
     */


    function dropHandler(e) {
      e.preventDefault(); // If dropped items aren't files, reject them

      const dt = e.dataTransfer;

      if (dt.items) {
        const itemsLength = dt.items.length; // Use DataTransferItemList interface to access the file(s)

        for (let i = 0; i < itemsLength; i += 1) {
          if (dt.items[i].kind === "file") {
            const f = dt.items[i].getAsFile();
            elements.audio.src = URL.createObjectURL(f);
            elements.fileTitle.textContent = f.name;
            elements.audio.play();
          }
        }
      } else {
        const filesLength = dt.files.length; // Use DataTransfer interface to access the file(s)

        for (let i = 0; i < filesLength; i += 1) {
          const file = dt.files[i];
          elements.audio.src = URL.createObjectURL(file);
          elements.fileTitle.textContent = file.name;
          elements.audio.play();
        }
      }

      elements.fileDrop.classList.remove(classes.active);
      deactivateMic();
      activateFileInput();
    }
    /**
     *
     * @param {Event} e
     */


    function dragOverHandler(e) {
      e.preventDefault();
      elements.fileDrop.classList.add(classes.active);
    }
    /**
     *
     * @param {Event} e
     */


    function dragEndHandler(e) {
      // Remove all of the drag data
      const dt = e.dataTransfer;

      if (dt.items) {
        const itemsLength = dt.items.length; // Use DataTransferItemList interface to remove the drag data

        for (let i = 0; i < itemsLength; i += 1) {
          dt.items.remove(i);
        }
      } else {
        // Use DataTransfer interface to remove the drag data
        e.dataTransfer.clearData();
      }

      elements.fileDrop.classList.remove(classes.active);
      deactivateMic();
      activateFileInput();
    }
    /* drawing
     ********************************************************* */

    /**
     *
     */


    function draw() {
      analyser.getByteFrequencyData(dataArray);

      for (let i = circlesLenFromZero; i >= 0; i -= 1) {
        const val = dataArray[circlesLen - i];
        const circle = elements.circles[i];

        if (val < threshold) {
          requestAnimationFrame(() => {
            clearAnimation(circle);
          });
        } else {
          requestAnimationFrame(() => {
            circle.classList.add("animated");
            circle.style.setProperty("--scale", val);
          });
        }
      }

      if (mode === "file") {
        setProgress();
      }

      requestAnimationFrame(draw);
    }
    /**
     *
     */


    function pauseDrawing() {
      window.cancelAnimationFrame(animationFrame);

      for (let i = circlesLenFromZero; i >= 0; i -= 1) {
        clearAnimation(elements.circles[i]);
      }
    }
    /**
     *
     */


    function stopDrawing() {
      pauseDrawing();
      elements.audioButton.classList.remove(classes.playButton, classes.pauseButton);
      elements.fileTitle.textContent = "";
      elements.progressBar.removeAttribute("style");
    }
    /**
     *
     * @param {HTMLElement} circle
     */


    function clearAnimation(circle) {
      circle.classList.remove("animated");
    }
    /**
     *
     */


    function setProgress() {
      requestAnimationFrame(() => {
        elements.progressBar.style.setProperty("--move", 100 - 100 * (elements.audio.currentTime / duration));
      });
    }

    if (AudioContext) {
      for (let i = 0; i < circlesLen; i += 1) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const position = earthPositions[i];
        circle.setAttributeNS(null, "r", 1);
        circle.setAttribute("cx", position.x);
        circle.setAttribute("cy", position.y);
        circle.setAttribute("fill", `hsl(${i * colorMulti}, 100%, 50%)`);
        circle.setAttribute("style", `transform-origin: ${position.x / 10}rem ${position.y / 10}rem`);
        elements.svg.appendChild(circle);
      }
    } else {
      const p = document.createElement("p");
      p.textContent = text.notSupported;
      p.setAttribute("class", classes.noJs);
      elements.svgContainer.appendChild(p);
      elements.svg.remove();
      elements.options.remove();
    }
  });

  var misc = (() => {
    const elements = {
      svgContainer: document.getElementById("SvgContainer"),
      informationButton: document.getElementById("InformationButton"),
      information: document.getElementById("Information")
    };
    const classes = {
      active: "is-active",
      audio_active: "audio-active"
    };
    addInformationButtonListener();
    /* opening the info window
     ********************************************************* */

    /**
     *
     */

    function addInformationButtonListener() {
      elements.informationButton.addEventListener("click", e => {
        e.preventDefault();
        informationOverlayHandling();
      });
      elements.information.addEventListener("click", e => {
        e.stopPropagation();

        if (e.target === elements.information) {
          closeInformationOverlay();
        }
      });
    }
    /**
     *
     */


    function informationOverlayHandling() {
      elements.information.classList.toggle(classes.active);
      elements.informationButton.blur();
    }
    /**
     *
     */


    function closeInformationOverlay() {
      elements.information.classList.remove(classes.active);
    }
  });

  audio();
  misc();

})();
//# sourceMappingURL=index.compiled.js.map
