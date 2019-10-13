const actions = {
  FIX_NAVIGATION_WIDTH:'FIX_NAVIGATION_WIDTH',
  COLLAPSE_NAVIGATION: 'COLLAPSE_NAVIGATION',
  fixNavigationWidth: payload => ({type: actions.FIX_NAVIGATION_WIDTH, payload}),
  collapseNavigation: payload => ({type: actions.COLLAPSE_NAVIGATION, payload})
}

export default actions