const foodImages = [
  'https://i.pinimg.com/236x/73/00/20/73002006afead397276128c860b11f3a.jpg',
  'https://i.pinimg.com/enabled_lo/474x/06/61/85/06618540df4671e11b830165aa65580c.jpg',
  'https://i.pinimg.com/enabled_lo/236x/9b/1f/0b/9b1f0bd72da945ce40c667f6a052873d.jpg',
  'https://i.pinimg.com/enabled_lo/474x/cd/7d/28/cd7d28e7479985229048a043f7d17755.jpg',
  'https://i.pinimg.com/enabled_lo/236x/8c/c5/84/8cc58492aa0161a66e2881a21e071906.jpg',
  'https://i.pinimg.com/236x/b9/45/e6/b945e6521c7288b586609fd79fb32b31.jpg',
  'https://i.pinimg.com/474x/02/79/1c/02791ce592435e69db0ae25711bcd95b.jpg',
  'https://i.pinimg.com/736x/22/89/9b/22899b099951a810c29738d98234631c.jpg',
  'https://i.pinimg.com/236x/22/b0/cd/22b0cdae9cd90cc28492efa86dbde7e5.jpg',
  'https://i.pinimg.com/474x/64/9b/40/649b403b951230f34a449286cf46dbbe.jpg',
  'https://i.pinimg.com/236x/fa/34/f6/fa34f637dd956cdd66aa9fd552144067.jpg',
  'https://i.pinimg.com/enabled_lo/236x/0e/14/da/0e14da60527f0401fc8521083dc1f41f.jpg',
  'https://i.pinimg.com/enabled_lo/236x/14/d3/9e/14d39eda995bd6acaa0ba3ad63bc3ff6.jpg',
  'https://i.pinimg.com/enabled_lo/236x/84/25/fb/8425fb68ea36f276eb3f62e29dd383b3.jpg',
  'https://i.pinimg.com/enabled_lo/474x/3c/f8/61/3cf8611dc303c8b00f967c3e2eefa7a0.jpg',
  'https://i.pinimg.com/enabled_lo/236x/49/ba/03/49ba0340cd117ef43f884e5f5d3d3e88.jpg',
  'https://i.pinimg.com/474x/94/d8/7f/94d87ffb9822fe62b1876aeb2d853cee.jpg',
  'https://i.pinimg.com/enabled_lo/236x/9e/f1/b6/9ef1b68f588fa5140ce30362429a2011.jpg',
  'https://i.pinimg.com/enabled_lo/236x/a4/de/71/a4de7146325ff741103e9adfd5e1a854.jpg',
  'https://i.pinimg.com/236x/bd/66/f7/bd66f7769bf9bbaa63825c3ee63f8c0d.jpg'
]

const sortedValue =  Math.floor(Math.random() * foodImages.length);

window.location.replace(foodImages[sortedValue]);
