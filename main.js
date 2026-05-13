/** List of countries used to fetch coordinates and names, keep in mind these may not be 100% accurate. */
const COUNTRIES = [
  {
    'country': 'Albania',
    'latitude': 41,
    'longitude': 20
  },
  {
    'country': 'Algeria',
    'latitude': 28,
    'longitude': 3
  },
  {
    'country': 'American Samoa',
    'latitude': -14.3333,
    'longitude': -170
  },
  {
    'country': 'Andorra',
    'latitude': 42.5,
    'longitude': 1.6
  },
  {
    'country': 'Angola',
    'latitude': -12.5,
    'longitude': 18.5
  },
  {
    'country': 'Anguilla',
    'latitude': 18.25,
    'longitude': -63.1667
  },
  {
    'country': 'Antigua and Barbuda',
    'latitude': 17.05,
    'longitude': -61.8
  },
  {
    'country': 'Argentina',
    'latitude': -34,
    'longitude': -64
  },
  {
    'country': 'Armenia',
    'latitude': 40,
    'longitude': 45
  },
  {
    'country': 'Aruba',
    'latitude': 12.5,
    'longitude': -69.9667
  },
  {
    'country': 'Australia',
    'latitude': -27,
    'longitude': 133
  },
  {
    'country': 'Austria',
    'latitude': 47.3333,
    'longitude': 13.3333
  },
  {
    'country': 'Azerbaijan',
    'latitude': 40.5,
    'longitude': 47.5
  },
  {
    'country': 'Bahamas',
    'latitude': 24.25,
    'longitude': -76
  },
  {
    'country': 'Bahrain',
    'latitude': 26,
    'longitude': 50.55
  },
  {
    'country': 'Bangladesh',
    'latitude': 24,
    'longitude': 90
  },
  {
    'country': 'Barbados',
    'latitude': 13.1667,
    'longitude': -59.5333
  },
  {
    'country': 'Belarus',
    'latitude': 53,
    'longitude': 28
  },
  {
    'country': 'Belgium',
    'latitude': 50.8333,
    'longitude': 4
  },
  {
    'country': 'Belize',
    'latitude': 17.25,
    'longitude': -88.75
  },
  {
    'country': 'Benin',
    'latitude': 9.5,
    'longitude': 2.25
  },
  {
    'country': 'Bermuda',
    'latitude': 32.3333,
    'longitude': -64.75
  },
  {
    'country': 'Bhutan',
    'latitude': 27.5,
    'longitude': 90.5
  },
  {
    'country': 'Bolivia',
    'latitude': -17,
    'longitude': -65
  },
  {
    'country': 'Bosnia and Herzegovina',
    'latitude': 44,
    'longitude': 18
  },
  {
    'country': 'Botswana',
    'latitude': -22,
    'longitude': 24
  },
  {
    'country': 'Bouvet Island',
    'latitude': -54.4333,
    'longitude': 3.4
  },
  {
    'country': 'Brazil',
    'latitude': -10,
    'longitude': -55
  },
  {
    'country': 'British Indian Ocean Territory',
    'latitude': -6,
    'longitude': 71.5
  },
  {
    'country': 'Brunei Darussalam',
    'latitude': 4.5,
    'longitude': 114.6667
  },
  {
    'country': 'Bulgaria',
    'latitude': 43,
    'longitude': 25
  },
  {
    'country': 'Burkina Faso',
    'latitude': 13,
    'longitude': -2
  },
  {
    'country': 'Burundi',
    'latitude': -3.5,
    'longitude': 30
  },
  {
    'country': 'Cambodia',
    'latitude': 13,
    'longitude': 105
  },
  {
    'country': 'Cameroon',
    'latitude': 6,
    'longitude': 12
  },
  {
    'country': 'Canada',
    'latitude': 60,
    'longitude': -95
  },
  {
    'country': 'Cape Verde',
    'latitude': 16,
    'longitude': -24
  },
  {
    'country': 'Cayman Islands',
    'latitude': 19.5,
    'longitude': -80.5
  },
  {
    'country': 'Central African Republic',
    'latitude': 7,
    'longitude': 21
  },
  {
    'country': 'Chad',
    'latitude': 15,
    'longitude': 19
  },
  {
    'country': 'Chile',
    'latitude': -30,
    'longitude': -71
  },
  {
    'country': 'China',
    'latitude': 35,
    'longitude': 105
  },
  {
    'country': 'Christmas Island',
    'latitude': -10.5,
    'longitude': 105.6667
  },
  {
    'country': 'Cocos (Keeling) Islands',
    'latitude': -12.5,
    'longitude': 96.8333
  },
  {
    'country': 'Colombia',
    'latitude': 4,
    'longitude': -72
  },
  {
    'country': 'Comoros',
    'latitude': -12.1667,
    'longitude': 44.25
  },
  {
    'country': 'Congo',
    'latitude': -1,
    'longitude': 15
  },
  {
    'country': 'Congo',
    'latitude': 0,
    'longitude': 25
  },
  {
    'country': 'Cook Islands',
    'latitude': -21.2333,
    'longitude': -159.7667
  },
  {
    'country': 'Costa Rica',
    'latitude': 10,
    'longitude': -84
  },
  {
    'country': 'Cote d\'Ivoire',
    'latitude': 8,
    'longitude': -5
  },
  {
    'country': 'Croatia',
    'latitude': 45.1667,
    'longitude': 15.5
  },
  {
    'country': 'Cuba',
    'latitude': 21.5,
    'longitude': -80
  },
  {
    'country': 'Cyprus',
    'latitude': 35,
    'longitude': 33
  },
  {
    'country': 'Czech Republic',
    'latitude': 49.75,
    'longitude': 15.5
  },
  {
    'country': 'Denmark',
    'latitude': 56,
    'longitude': 10
  },
  {
    'country': 'Djibouti',
    'latitude': 11.5,
    'longitude': 43
  },
  {
    'country': 'Dominica',
    'latitude': 15.4167,
    'longitude': -61.3333
  },
  {
    'country': 'Dominican Republic',
    'latitude': 19,
    'longitude': -70.6667
  },
  {
    'country': 'Ecuador',
    'latitude': -2,
    'longitude': -77.5
  },
  {
    'country': 'Egypt',
    'latitude': 27,
    'longitude': 30
  },
  {
    'country': 'El Salvador',
    'latitude': 13.8333,
    'longitude': -88.9167
  },
  {
    'country': 'Equatorial Guinea',
    'latitude': 2,
    'longitude': 10
  },
  {
    'country': 'Eritrea',
    'latitude': 15,
    'longitude': 39
  },
  {
    'country': 'Estonia',
    'latitude': 59,
    'longitude': 26
  },
  {
    'country': 'Ethiopia',
    'latitude': 8,
    'longitude': 38
  },
  {
    'country': 'Falkland Islands (Malvinas)',
    'latitude': -51.75,
    'longitude': -59
  },
  {
    'country': 'Faroe Islands',
    'latitude': 62,
    'longitude': -7
  },
  {
    'country': 'Fiji',
    'latitude': -18,
    'longitude': 175
  },
  {
    'country': 'Finland',
    'latitude': 64,
    'longitude': 26
  },
  {
    'country': 'France',
    'latitude': 46,
    'longitude': 2
  },
  {
    'country': 'French Guiana',
    'latitude': 4,
    'longitude': -53
  },
  {
    'country': 'French Polynesia',
    'latitude': -15,
    'longitude': -140
  },
  {
    'country': 'French Southern Territories',
    'latitude': -43,
    'longitude': 67
  },
  {
    'country': 'Gabon',
    'latitude': -1,
    'longitude': 11.75
  },
  {
    'country': 'Gambia',
    'latitude': 13.4667,
    'longitude': -16.5667
  },
  {
    'country': 'Georgia',
    'latitude': 42,
    'longitude': 43.5
  },
  {
    'country': 'Germany',
    'latitude': 51,
    'longitude': 9
  },
  {
    'country': 'Ghana',
    'latitude': 8,
    'longitude': -2
  },
  {
    'country': 'Gibraltar',
    'latitude': 36.1833,
    'longitude': -5.3667
  },
  {
    'country': 'Greece',
    'latitude': 39,
    'longitude': 22
  },
  {
    'country': 'Greenland',
    'latitude': 72,
    'longitude': -40
  },
  {
    'country': 'Grenada',
    'latitude': 12.1167,
    'longitude': -61.6667
  },
  {
    'country': 'Guadeloupe',
    'latitude': 16.25,
    'longitude': -61.5833
  },
  {
    'country': 'Guam',
    'latitude': 13.4667,
    'longitude': 144.7833
  },
  {
    'country': 'Guatemala',
    'latitude': 15.5,
    'longitude': -90.25
  },
  {
    'country': 'Guernsey',
    'latitude': 49.5,
    'longitude': -2.56
  },
  {
    'country': 'Guinea',
    'latitude': 11,
    'longitude': -10
  },
  {
    'country': 'Guinea-Bissau',
    'latitude': 12,
    'longitude': -15
  },
  {
    'country': 'Guyana',
    'latitude': 5,
    'longitude': -59
  },
  {
    'country': 'Haiti',
    'latitude': 19,
    'longitude': -72.4167
  },
  {
    'country': 'Heard Island and McDonald Islands',
    'latitude': -53.1,
    'longitude': 72.5167
  },
  {
    'country': 'Vatican City',
    'latitude': 41.9,
    'longitude': 12.45
  },
  {
    'country': 'Honduras',
    'latitude': 15,
    'longitude': -86.5
  },
  {
    'country': 'Hong Kong',
    'latitude': 22.25,
    'longitude': 114.1667
  },
  {
    'country': 'Hungary',
    'latitude': 47,
    'longitude': 20
  },
  {
    'country': 'Iceland',
    'latitude': 65,
    'longitude': -18
  },
  {
    'country': 'India',
    'latitude': 20,
    'longitude': 77
  },
  {
    'country': 'Indonesia',
    'latitude': -5,
    'longitude': 120
  },
  {
    'country': 'Iran',
    'latitude': 32,
    'longitude': 53
  },
  {
    'country': 'Iraq',
    'latitude': 33,
    'longitude': 44
  },
  {
    'country': 'Ireland',
    'latitude': 53,
    'longitude': -8
  },
  {
    'country': 'Isle of Man',
    'latitude': 54.23,
    'longitude': -4.55
  },
  {
    'country': 'Israel',
    'latitude': 31.5,
    'longitude': 34.75
  },
  {
    'country': 'Italy',
    'latitude': 42.8333,
    'longitude': 12.8333
  },
  {
    'country': 'Jamaica',
    'latitude': 18.25,
    'longitude': -77.5
  },
  {
    'country': 'Japan',
    'latitude': 36,
    'longitude': 138
  },
  {
    'country': 'Jersey',
    'latitude': 49.21,
    'longitude': -2.13
  },
  {
    'country': 'Jordan',
    'latitude': 31,
    'longitude': 36
  },
  {
    'country': 'Kazakhstan',
    'latitude': 48,
    'longitude': 68
  },
  {
    'country': 'Kenya',
    'latitude': 1,
    'longitude': 38
  },
  {
    'country': 'Kiribati',
    'latitude': 1.4167,
    'longitude': 173
  },
  {
    'country': 'North Korea',
    'latitude': 40,
    'longitude': 127
  },
  {
    'country': 'South Korea',
    'latitude': 37,
    'longitude': 127.5
  },
  {
    'country': 'Kuwait',
    'latitude': 29.3375,
    'longitude': 47.6581
  },
  {
    'country': 'Kyrgyzstan',
    'latitude': 41,
    'longitude': 75
  },
  {
    'country': 'Lao',
    'latitude': 18,
    'longitude': 105
  },
  {
    'country': 'Latvia',
    'latitude': 57,
    'longitude': 25
  },
  {
    'country': 'Lebanon',
    'latitude': 33.8333,
    'longitude': 35.8333
  },
  {
    'country': 'Lesotho',
    'latitude': -29.5,
    'longitude': 28.5
  },
  {
    'country': 'Liberia',
    'latitude': 6.5,
    'longitude': -9.5
  },
  {
    'country': 'Libya',
    'latitude': 25,
    'longitude': 17
  },
  {
    'country': 'Liechtenstein',
    'latitude': 47.1667,
    'longitude': 9.5333
  },
  {
    'country': 'Lithuania',
    'latitude': 56,
    'longitude': 24
  },
  {
    'country': 'Luxembourg',
    'latitude': 49.75,
    'longitude': 6.1667
  },
  {
    'country': 'Macao',
    'latitude': 22.1667,
    'longitude': 113.55
  },
  {
    'country': 'Macedonia',
    'latitude': 41.8333,
    'longitude': 22
  },
  {
    'country': 'Madagascar',
    'latitude': -20,
    'longitude': 47
  },
  {
    'country': 'Malawi',
    'latitude': -13.5,
    'longitude': 34
  },
  {
    'country': 'Malaysia',
    'latitude': 2.5,
    'longitude': 112.5
  },
  {
    'country': 'Maldives',
    'latitude': 3.25,
    'longitude': 73
  },
  {
    'country': 'Mali',
    'latitude': 17,
    'longitude': -4
  },
  {
    'country': 'Malta',
    'latitude': 35.8333,
    'longitude': 14.5833
  },
  {
    'country': 'Marshall Islands',
    'latitude': 9,
    'longitude': 168
  },
  {
    'country': 'Martinique',
    'latitude': 14.6667,
    'longitude': -61
  },
  {
    'country': 'Mauritania',
    'latitude': 20,
    'longitude': -12
  },
  {
    'country': 'Mauritius',
    'latitude': -20.2833,
    'longitude': 57.55
  },
  {
    'country': 'Mayotte',
    'latitude': -12.8333,
    'longitude': 45.1667
  },
  {
    'country': 'Mexico',
    'latitude': 23,
    'longitude': -102
  },
  {
    'country': 'Micronesia',
    'latitude': 6.9167,
    'longitude': 158.25
  },
  {
    'country': 'Moldova',
    'latitude': 47,
    'longitude': 29
  },
  {
    'country': 'Monaco',
    'latitude': 43.7333,
    'longitude': 7.4
  },
  {
    'country': 'Mongolia',
    'latitude': 46,
    'longitude': 105
  },
  {
    'country': 'Montenegro',
    'latitude': 42,
    'longitude': 19
  },
  {
    'country': 'Montserrat',
    'latitude': 16.75,
    'longitude': -62.2
  },
  {
    'country': 'Morocco',
    'latitude': 32,
    'longitude': -5
  },
  {
    'country': 'Mozambique',
    'latitude': -18.25,
    'longitude': 35
  },
  {
    'country': 'Myanmar',
    'latitude': 22,
    'longitude': 98
  },
  {
    'country': 'Namibia',
    'latitude': -22,
    'longitude': 17
  },
  {
    'country': 'Nauru',
    'latitude': -0.5333,
    'longitude': 166.9167
  },
  {
    'country': 'Nepal',
    'latitude': 28,
    'longitude': 84
  },
  {
    'country': 'Netherlands',
    'latitude': 52.5,
    'longitude': 5.75
  },
  {
    'country': 'Netherlands Antilles',
    'latitude': 12.25,
    'longitude': -68.75
  },
  {
    'country': 'New Caledonia',
    'latitude': -21.5,
    'longitude': 165.5
  },
  {
    'country': 'New Zealand',
    'latitude': -41,
    'longitude': 174
  },
  {
    'country': 'Nicaragua',
    'latitude': 13,
    'longitude': -85
  },
  {
    'country': 'Niger',
    'latitude': 16,
    'longitude': 8
  },
  {
    'country': 'Nigeria',
    'latitude': 10,
    'longitude': 8
  },
  {
    'country': 'Niue',
    'latitude': -19.0333,
    'longitude': -169.8667
  },
  {
    'country': 'Norfolk Island',
    'latitude': -29.0333,
    'longitude': 167.95
  },
  {
    'country': 'Northern Mariana Islands',
    'latitude': 15.2,
    'longitude': 145.75
  },
  {
    'country': 'Norway',
    'latitude': 62,
    'longitude': 10
  },
  {
    'country': 'Oman',
    'latitude': 21,
    'longitude': 57
  },
  {
    'country': 'Pakistan',
    'latitude': 30,
    'longitude': 70
  },
  {
    'country': 'Palau',
    'latitude': 7.5,
    'longitude': 134.5
  },
  {
    'country': 'Palestine',
    'latitude': 32,
    'longitude': 35.25
  },
  {
    'country': 'Panama',
    'latitude': 9,
    'longitude': -80
  },
  {
    'country': 'Papua New Guinea',
    'latitude': -6,
    'longitude': 147
  },
  {
    'country': 'Paraguay',
    'latitude': -23,
    'longitude': -58
  },
  {
    'country': 'Peru',
    'latitude': -10,
    'longitude': -76
  },
  {
    'country': 'Pitcairn',
    'latitude': -24.7,
    'longitude': -127.4
  },
  {
    'country': 'Poland',
    'latitude': 52,
    'longitude': 20
  },
  {
    'country': 'Portugal',
    'latitude': 39.5,
    'longitude': -8
  },
  {
    'country': 'Puerto Rico',
    'latitude': 18.25,
    'longitude': -66.5
  },
  {
    'country': 'Qatar',
    'latitude': 25.5,
    'longitude': 51.25
  },
  {
    'country': 'Reunion',
    'latitude': -21.1,
    'longitude': 55.6
  },
  {
    'country': 'Romania',
    'latitude': 46,
    'longitude': 25
  },
  {
    'country': 'Russian Federation',
    'latitude': 60,
    'longitude': 100
  },
  {
    'country': 'Rwanda',
    'latitude': -2,
    'longitude': 30
  },
  {
    'country': 'Samoa',
    'latitude': -13.5833,
    'longitude': -172.3333
  },
  {
    'country': 'San Marino',
    'latitude': 43.7667,
    'longitude': 12.4167
  },
  {
    'country': 'Saudi Arabia',
    'latitude': 25,
    'longitude': 45
  },
  {
    'country': 'Senegal',
    'latitude': 14,
    'longitude': -14
  },
  {
    'country': 'Serbia',
    'latitude': 44,
    'longitude': 21
  },
  {
    'country': 'Seychelles',
    'latitude': -4.5833,
    'longitude': 55.6667
  },
  {
    'country': 'Sierra Leone',
    'latitude': 8.5,
    'longitude': -11.5
  },
  {
    'country': 'Singapore',
    'latitude': 1.3667,
    'longitude': 103.8
  },
  {
    'country': 'Slovakia',
    'latitude': 48.6667,
    'longitude': 19.5
  },
  {
    'country': 'Slovenia',
    'latitude': 46,
    'longitude': 15
  },
  {
    'country': 'Solomon Islands',
    'latitude': -8,
    'longitude': 159
  },
  {
    'country': 'Somalia',
    'latitude': 10,
    'longitude': 49
  },
  {
    'country': 'South Africa',
    'latitude': -29,
    'longitude': 24
  },
  {
    'country': 'South Georgia and the South Sandwich Islands',
    'latitude': -54.5,
    'longitude': -37
  },
  {
    'country': 'Spain',
    'latitude': 40,
    'longitude': -4
  },
  {
    'country': 'Sri Lanka',
    'latitude': 7,
    'longitude': 81
  },
  {
    'country': 'Sudan',
    'latitude': 15,
    'longitude': 30
  },
  {
    'country': 'Suriname',
    'latitude': 4,
    'longitude': -56
  },
  {
    'country': 'Svalbard and Jan Mayen',
    'latitude': 78,
    'longitude': 20
  },
  {
    'country': 'Swaziland',
    'latitude': -26.5,
    'longitude': 31.5
  },
  {
    'country': 'Sweden',
    'latitude': 62,
    'longitude': 15
  },
  {
    'country': 'Switzerland',
    'latitude': 47,
    'longitude': 8
  },
  {
    'country': 'Syrian Arab Republic',
    'latitude': 35,
    'longitude': 38
  },
  {
    'country': 'Taiwan',
    'latitude': 23.5,
    'longitude': 121
  },
  {
    'country': 'Tajikistan',
    'latitude': 39,
    'longitude': 71
  },
  {
    'country': 'Tanzania',
    'latitude': -6,
    'longitude': 35
  },
  {
    'country': 'Thailand',
    'latitude': 15,
    'longitude': 100
  },
  {
    'country': 'Timor-Leste',
    'latitude': -8.55,
    'longitude': 125.5167
  },
  {
    'country': 'Togo',
    'latitude': 8,
    'longitude': 1.1667
  },
  {
    'country': 'Tokelau',
    'latitude': -9,
    'longitude': -172
  },
  {
    'country': 'Tonga',
    'latitude': -20,
    'longitude': -175
  },
  {
    'country': 'Trinidad and Tobago',
    'latitude': 11,
    'longitude': -61
  },
  {
    'country': 'Tunisia',
    'latitude': 34,
    'longitude': 9
  },
  {
    'country': 'Turkey',
    'latitude': 39,
    'longitude': 35
  },
  {
    'country': 'Turkmenistan',
    'latitude': 40,
    'longitude': 60
  },
  {
    'country': 'Turks and Caicos Islands',
    'latitude': 21.75,
    'longitude': -71.5833
  },
  {
    'country': 'Tuvalu',
    'latitude': -8,
    'longitude': 178
  },
  {
    'country': 'Uganda',
    'latitude': 1,
    'longitude': 32
  },
  {
    'country': 'Ukraine',
    'latitude': 49,
    'longitude': 32
  },
  {
    'country': 'United Arab Emirates',
    'latitude': 24,
    'longitude': 54
  },
  {
    'country': 'United Kingdom',
    'latitude': 54,
    'longitude': -2
  },
  {
    'country': 'United States',
    'latitude': 38,
    'longitude': -97
  },
  {
    'country': 'Uruguay',
    'latitude': -33,
    'longitude': -56
  },
  {
    'country': 'Uzbekistan',
    'latitude': 41,
    'longitude': 64
  },
  {
    'country': 'Vanuatu',
    'latitude': -16,
    'longitude': 167
  },
  {
    'country': 'Vietnam',
    'latitude': 16,
    'longitude': 106
  },
  {
    'country': 'Wallis and Futuna',
    'latitude': -13.3,
    'longitude': -176.2
  },
  {
    'country': 'Yemen',
    'latitude': 15,
    'longitude': 48
  },
  {
    'country': 'Zambia',
    'latitude': -15,
    'longitude': 30
  },
  {
    'country': 'Zimbabwe',
    'latitude': -20,
    'longitude': 30
  },
  {
    'country': 'Afghanistan',
    'latitude': 33,
    'longitude': 65
  }
];

const GAME_STATES = Object.freeze({
  READY: 'ready',
  SELECTING_X: 'selecting-x',
  SELECTING_Y: 'selecting-y',
  RESULT: 'result',
});

const STORAGE_KEY = 'free-to-book-high-score';
const ASSETS = Object.freeze({
  MAP: './assets/map.png',
  PLANE: './assets/plane.png',
  PIN: './assets/pin.png',
});

const MAP_OFFSET = Object.freeze({ X: 0.05, Y: 0.05 });
const PLANE_SPEED_PER_SECOND = 0.45;
const SCORE_CAP = 5000;
const SCORE_EXPONENT = 4;
const EARTH_MERIDIONAL_CIRCUMFERENCE_KM = 40_008;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const randomCountry = () => COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];

const formatNumber = (value) => new Intl.NumberFormat('en-GB').format(value);

const getStoredHighScore = () => {
  try {
    const value = Number(localStorage.getItem(STORAGE_KEY));
    return Number.isFinite(value) ? value : 0;
  } catch {
    return 0;
  }
};

const setStoredHighScore = (score) => {
  try {
    localStorage.setItem(STORAGE_KEY, String(score));
  } catch {
    // Storage may be unavailable in privacy modes; the game can still continue.
  }
};

const projectCountryToMap = ({ latitude, longitude }) => ({
  x: clamp((longitude + 180) / 360 - MAP_OFFSET.X, 0, 1),
  y: clamp(1 - (latitude + 90) / 180 - MAP_OFFSET.Y, 0, 1),
});

const calculateResult = (guess, target) => {
  const relativeDistance = Math.hypot(guess.x - target.x, guess.y - target.y);
  const accuracy = clamp(1 - relativeDistance, 0, 1);

  return {
    distanceKm: Math.round(relativeDistance * (EARTH_MERIDIONAL_CIRCUMFERENCE_KM / 2)),
    score: Math.round((accuracy ** SCORE_EXPONENT) * SCORE_CAP),
  };
};

class FreeToBookGame extends HTMLElement {
  #animationFrame = 0;
  #currentCountry = null;
  #direction = 1;
  #highScore = 0;
  #lastFrameTime = 0;
  #position = { x: 0, y: 0 };
  #state = GAME_STATES.READY;

  #elements = {};

  #handleKeyDown = (event) => {
    if (event.code !== 'Space') {
      return;
    }

    event.preventDefault();
    this.#advance();
  };

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.#render();
    }

    this.#highScore = getStoredHighScore();
    this.#setReadyState();
    this.#syncHighScore();

    window.addEventListener('keydown', this.#handleKeyDown);
    this.#startAnimation();
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this.#handleKeyDown);
    cancelAnimationFrame(this.#animationFrame);
  }

  #advance() {
    if (this.#state === GAME_STATES.READY || this.#state === GAME_STATES.RESULT) {
      this.#startRound();
      return;
    }

    if (this.#state === GAME_STATES.SELECTING_X) {
      this.#state = GAME_STATES.SELECTING_Y;
      this.#direction = 1;
      this.#elements.plane.dataset.axis = 'y';
      this.#setMessage('PRESS SPACE TO SELECT');
      return;
    }

    this.#finishRound();
  }

  #startRound() {
    this.#currentCountry = randomCountry();
    this.#position = { x: 0, y: 0 };
    this.#direction = 1;
    this.#state = GAME_STATES.SELECTING_X;

    this.#elements.pin.hidden = true;
    this.#elements.plane.hidden = false;
    this.#elements.plane.dataset.axis = 'x';
    this.#elements.plane.dataset.direction = 'forward';
    this.#elements.title.textContent = `FLY ME TO ${this.#currentCountry.country.toUpperCase()}!`;
    this.#setMessage('PRESS SPACE TO SELECT');
    this.#updatePlanePosition();
  }

  #finishRound() {
    const target = projectCountryToMap(this.#currentCountry);
    const result = calculateResult(this.#position, target);
    const isHighScore = result.score > this.#highScore;

    this.#state = GAME_STATES.RESULT;
    this.#elements.plane.dataset.axis = 'landed';
    this.#placePin(target);

    if (isHighScore) {
      this.#highScore = result.score;
      setStoredHighScore(this.#highScore);
      this.#syncHighScore(true);
    }

    const distance = formatNumber(result.distanceKm);
    const score = formatNumber(result.score);
    const scoreMessage = isHighScore
      ? `NEW HIGH SCORE! YOU EARNED ${score} POINTS!`
      : `YOU EARNED ${score} POINTS!`;

    this.#setMessage(`YOU WERE ${distance} KM AWAY\n${scoreMessage} PRESS SPACE TO RESTART`);
  }

  #setReadyState() {
    this.#state = GAME_STATES.READY;
    this.#currentCountry = null;
    this.#position = { x: 0, y: 0 };

    this.#elements.plane.hidden = true;
    this.#elements.pin.hidden = true;
    this.#elements.title.textContent = 'FLY ME TO...';
    this.#setMessage('PRESS SPACE TO START!');
  }

  #startAnimation() {
    cancelAnimationFrame(this.#animationFrame);
    this.#lastFrameTime = performance.now();
    this.#animationFrame = requestAnimationFrame((time) => this.#tick(time));
  }

  #tick(time) {
    const deltaSeconds = Math.min((time - this.#lastFrameTime) / 1000, 0.05);
    this.#lastFrameTime = time;

    if (this.#state === GAME_STATES.SELECTING_X) {
      this.#moveOnAxis('x', deltaSeconds);
    }

    if (this.#state === GAME_STATES.SELECTING_Y) {
      this.#moveOnAxis('y', deltaSeconds);
    }

    this.#animationFrame = requestAnimationFrame((nextTime) => this.#tick(nextTime));
  }

  #moveOnAxis(axis, deltaSeconds) {
    const nextPosition = this.#position[axis] + (this.#direction * PLANE_SPEED_PER_SECOND * deltaSeconds);

    if (nextPosition >= 1 || nextPosition <= 0) {
      this.#direction *= -1;
      this.#elements.plane.dataset.direction = this.#direction === 1 ? 'forward' : 'back';
    }

    this.#position[axis] = clamp(nextPosition, 0, 1);
    this.#updatePlanePosition();
  }

  #updatePlanePosition() {
    this.#elements.plane.style.left = `${this.#position.x * 100}%`;
    this.#elements.plane.style.top = `${this.#position.y * 100}%`;
  }

  #placePin(target) {
    this.#elements.pin.hidden = false;
    this.#elements.pin.style.left = `${target.x * 100}%`;
    this.#elements.pin.style.top = `${target.y * 100}%`;
  }

  #setMessage(message) {
    this.#elements.message.textContent = message;
  }

  #syncHighScore(celebrate = false) {
    this.#elements.highScore.textContent = this.#highScore > 0
      ? `HIGH SCORE: ${formatNumber(this.#highScore)}`
      : '';

    if (!celebrate) {
      return;
    }

    this.#elements.highScore.classList.remove('confetti');
    requestAnimationFrame(() => this.#elements.highScore.classList.add('confetti'));
    window.setTimeout(() => this.#elements.highScore.classList.remove('confetti'), 2000);
  }

  #render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          box-sizing: border-box;
          display: block;
          font-family: "Press Start 2P", system-ui;
          font-size: 0.65rem;
          font-weight: 500;
          max-height: 100vh;
          position: relative;
          width: 100%;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        .top-container {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }

        .toptext,
        .highscore,
        .subtext {
          margin: 0;
        }

        .toptext {
          padding-bottom: 20px;
          text-align: center;
        }

        .highscore {
          min-height: 1em;
          position: relative;
          text-align: right;
          white-space: nowrap;
        }

        .container {
          position: relative;
          width: 100%;
        }

        .map {
          display: block;
          width: 100%;
        }

        .plane,
        .pin {
          pointer-events: none;
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        .plane {
          transform-origin: center;
          transition: transform 250ms ease-in-out;
          width: 10%;
        }

        .plane[data-axis="x"][data-direction="back"] {
          transform: translate(-50%, -50%) scaleX(-1);
        }

        .plane[data-axis="y"] {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .plane[data-axis="y"][data-direction="back"] {
          transform: translate(-50%, -50%) rotate(-90deg);
        }

        .plane[data-axis="landed"] {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .pin {
          width: 5%;
        }

        .subtext {
          line-height: 1.55;
          min-height: 4.5em;
          padding-top: 20px;
          position: relative;
          text-align: center;
          white-space: pre-line;
        }

        .confetti::before {
          animation: confetti 1.8s ease-out forwards;
          background-image:
            linear-gradient(#a4d6f3 50%, transparent 0),
            linear-gradient(#ff6f61 50%, transparent 0),
            linear-gradient(#f7c948 50%, transparent 0),
            linear-gradient(#7dd3fc 50%, transparent 0),
            linear-gradient(#34d399 50%, transparent 0);
          background-repeat: no-repeat;
          background-size: 7px 7px, 5px 8px, 8px 5px, 6px 7px, 7px 6px;
          content: '';
          height: 120px;
          left: 50%;
          position: absolute;
          top: -2.5rem;
          transform: translateX(-50%);
          width: 140px;
          z-index: 3;
        }

        @keyframes confetti {
          0% {
            background-position: 20% 0%, 38% 0%, 52% 0%, 66% 0%, 82% 0%;
            opacity: 1;
          }

          100% {
            background-position: 12% 88%, 34% 72%, 54% 96%, 70% 78%, 90% 90%;
            opacity: 0;
          }
        }

        @media (max-width: 560px) {
          :host {
            font-size: 0.55rem;
          }

          .top-container {
            gap: 0.75rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .plane {
            transition: none;
          }

          .confetti::before {
            animation: none;
            display: none;
          }
        }
      </style>

      <div class="top-container">
        <p class="toptext" data-role="title"></p>
        <p class="highscore" data-role="high-score" aria-live="polite"></p>
      </div>

      <div class="container" data-role="stage" aria-label="Fly me to country guessing game">
        <img class="map" src="${ASSETS.MAP}" alt="Pixel world map">
        <img class="plane" src="${ASSETS.PLANE}" alt="" data-role="plane" hidden>
        <img class="pin" src="${ASSETS.PIN}" alt="" data-role="pin" hidden>
      </div>

      <p class="subtext" data-role="message" aria-live="polite"></p>
    `;

    this.#elements = {
      highScore: this.shadowRoot.querySelector('[data-role="high-score"]'),
      message: this.shadowRoot.querySelector('[data-role="message"]'),
      pin: this.shadowRoot.querySelector('[data-role="pin"]'),
      plane: this.shadowRoot.querySelector('[data-role="plane"]'),
      title: this.shadowRoot.querySelector('[data-role="title"]'),
    };
  }
}

if (!customElements.get('free-to-book')) {
  customElements.define('free-to-book', FreeToBookGame);
}
