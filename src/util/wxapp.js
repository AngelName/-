 // eslint-disable-next-line import/prefer-default-export
 export function setCurrentTabBar(selected) {
  if (typeof this.$scope.getTabBar === 'function' &&
  this.$scope.getTabBar()) {
    this.$scope.getTabBar().setData({
      selected: selected // 当前页面对应的 index
    })
}
}
