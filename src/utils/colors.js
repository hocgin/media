export default class Colors {
  static colors = [
    'rgba(229, 112, 141, 1)',
    'rgba(254, 196, 24, 1)',
    'rgba(254, 153, 73, 1)',
    'rgba(25, 189, 2, 1)',
    'rgba(237, 70, 148, 1)',
    'rgba(123, 114, 233, 1)',
    'rgba(85, 218, 225, 1)',
    'rgba(253, 102, 49, 1)',
    'rgba(26, 154, 247, 1)',
    'rgba(229, 112, 141, 1)',
    'rgba(169, 169, 169, 1)',
    'rgba(73, 232, 69, 1)',
    'rgba(68, 68, 68, 1)',
    'rgba(219, 73, 216, 1)',
    'rgba(56, 113, 221, 1)',
  ];

  /**
   * rgba
   * @param index
   */
  static getRgbaColor(index = parseInt(Math.random() * Colors.colors.length)) {
    if (index > Colors.colors.length - 1) {
      index = index % Colors.colors.length;
    }
    return Colors.colors[index];
  }
}