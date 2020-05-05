import React from 'react';
import { createBrowserApp } from '@react-navigation/web';
import { createStackNavigator } from 'react-navigation-stack';
import { ShowcaseIFrame } from '../components/showcaseIFrame.component';
import { ShowcaseThemingIFrame } from '../components/showcaseThemingIFrame.component';
import { AutocompleteAccessoriesShowcase } from '../components/autocomplete/autocompleteAccessories.component';
import { AutocompleteAsyncShowcase } from '../components/autocomplete/autocompleteAsync.component';
import { AutocompleteHandleKeyboardShowcase } from '../components/autocomplete/autocompleteHandleKeyboard.component';
import { AutocompleteSimpleUsageShowcase } from '../components/autocomplete/autocompleteSimpleUsage.component';
import { AvatarShapeShowcase } from '../components/avatar/avatarShape.component';
import { AvatarSimpleUsageShowcase } from '../components/avatar/avatarSimpleUsage.component';
import { AvatarSizeShowcase } from '../components/avatar/avatarSize.component';
import { BottomNavigationAccessoriesShowcase } from '../components/bottomNavigation/bottomNavigationAccessories.component';
import { BottomNavigationSimpleUsageShowcase } from '../components/bottomNavigation/bottomNavigationSimpleUsage.component';
import { BottomNavigationTabSimpleUsageShowcase } from '../components/bottomNavigation/bottomNavigationTabSimpleUsage.component';
import { BottomNavigationTabThemingShowcase } from '../components/bottomNavigation/bottomNavigationTabTheming.component';
import { BottomNavigationWithoutIndicatorShowcase } from '../components/bottomNavigation/bottomNavigationWithoutIndicator.component';
import { ButtonAccessoriesShowcase } from '../components/button/buttonAccessories.component';
import { ButtonAppearancesShowcase } from '../components/button/buttonAppearances.component';
import { ButtonGhostShowcase } from '../components/button/buttonGhost.component';
import { ButtonOutlineShowcase } from '../components/button/buttonOutline.component';
import { ButtonSimpleUsageShowcase } from '../components/button/buttonSimpleUsage.component';
import { ButtonSizeShowcase } from '../components/button/buttonSize.component';
import { ButtonStatesShowcase } from '../components/button/buttonStates.component';
import { ButtonStatusShowcase } from '../components/button/buttonStatus.component';
import { ButtonThemingShowcase } from '../components/button/buttonTheming.component';
import { ButtonGroupAppearanceShowcase } from '../components/buttonGroup/buttonGroupAppearance.component';
import { ButtonGroupOutlineShowcase } from '../components/buttonGroup/buttonGroupOutline.component';
import { ButtonGroupSimpleUsageShowcase } from '../components/buttonGroup/buttonGroupSimpleUsage.component';
import { ButtonGroupSizeShowcase } from '../components/buttonGroup/buttonGroupSize.component';
import { ButtonGroupStatusShowcase } from '../components/buttonGroup/buttonGroupStatus.component';
import { ButtonGroupWithIconsShowcase } from '../components/buttonGroup/buttonGroupWithIcons.component';
import { CalendarCustomDayShowcase } from '../components/calendar/calendarCustomDay.component';
import { CalendarFiltersShowcase } from '../components/calendar/calendarFilters.component';
import { CalendarLocaleSettingsShowcase } from '../components/calendar/calendarLocaleSettings.component';
import { CalendarMomentShowcase } from '../components/calendar/calendarMoment.component';
import { CalendarSimpleUsageShowcase } from '../components/calendar/calendarSimpleUsage.component';
import { CalendarThemingShowcase } from '../components/calendar/calendarTheming.component';
import { RangeCalendarSimpleUsageShowcase } from '../components/calendar/rangeCalendarSimpleUsage.component';
import { CardAccessoriesShowcase } from '../components/card/cardAccessories.component';
import { CardSimpleUsageShowcase } from '../components/card/cardSimpleUsage.component';
import { CardStatusesShowcase } from '../components/card/cardStatuses.component';
import { CheckboxIndeterminateShowcase } from '../components/checkbox/checkboxIndeterminate.component';
import { CheckboxSimpleUsageShowcase } from '../components/checkbox/checkboxSimpleUsage.component';
import { CheckboxStatesShowcase } from '../components/checkbox/checkboxStates.component';
import { CheckboxStatusShowcase } from '../components/checkbox/checkboxStatus.component';
import { CheckboxThemingShowcase } from '../components/checkbox/checkboxTheming.component';
import { DatepickerAccessoriesShowcase } from '../components/datepicker/datepickerAccessories.component';
import { DatepickerCustomDayShowcase } from '../components/datepicker/datepickerCustomDay.component';
import { DatepickerFiltersShowcase } from '../components/datepicker/datepickerFilters.component';
import { DatepickerLocaleSettingsShowcase } from '../components/datepicker/datepickerLocaleSettings.component';
import { DatepickerMomentShowcase } from '../components/datepicker/datepickerMoment.component';
import { DatepickerSimpleUsageShowcase } from '../components/datepicker/datepickerSimpleUsage.component';
import { DatepickerSizeShowcase } from '../components/datepicker/datepickerSize.component';
import { DatepickerStatusShowcase } from '../components/datepicker/datepickerStatus.component';
import { DatepickerThemingShowcase } from '../components/datepicker/datepickerTheming.component';
import { RangeDatepickerSimpleUsageShowcase } from '../components/datepicker/rangeDatepickerSimpleUsage.component';
import { DrawerAccessoriesShowcase } from '../components/drawer/drawerAccessories.component';
import { DrawerGroupsShowcase } from '../components/drawer/drawerGroups.component';
import { DrawerItemSimpleUsageShowcase } from '../components/drawer/drawerItemSimpleUsage.component';
import { DrawerNoMarkersShowcase } from '../components/drawer/drawerNoMarkers.component';
import { DrawerSimpleUsageShowcase } from '../components/drawer/drawerSimpleUsage.component';
import { DrawerThemingShowcase } from '../components/drawer/drawerTheming.component';
import { IconAnimationShowcase } from '../components/icon/iconAnimation.component';
import { IconSimpleUsageShowcase } from '../components/icon/iconSimpleUsage.component';
import { IconThemingShowcase } from '../components/icon/iconTheming.component';
import { IconWithinComponentsShowcase } from '../components/icon/iconWithinComponents.component';
import { InputAccessoriesShowcase } from '../components/input/inputAccessories.component';
import { InputSimpleUsageShowcase } from '../components/input/inputSimpleUsage.component';
import { InputSizeShowcase } from '../components/input/inputSize.component';
import { InputStatesShowcase } from '../components/input/inputStates.component';
import { InputStatusShowcase } from '../components/input/inputStatus.component';
import { InputThemingShowcase } from '../components/input/inputTheming.component';
import { LayoutLevelShowcase } from '../components/layout/layoutLevel.component';
import { ListAccessoriesShowcase } from '../components/list/listAccessories.component';
import { ListCustomItemShowcase } from '../components/list/listCustomItem.component';
import { ListDividersShowcase } from '../components/list/listDividers.component';
import { ListItemSimpleUsageShowcase } from '../components/list/listItemSimpleUsage.component';
import { ListSimpleUsageShowcase } from '../components/list/listSimpleUsage.component';
import { MenuAccessoriesShowcase } from '../components/menu/menuAccessories.component';
import { MenuDisabledOptionsShowcase } from '../components/menu/menuDisabledOptions.component';
import { MenuGroupsShowcase } from '../components/menu/menuGroups.component';
import { MenuItemSimpleUsageShowcase } from '../components/menu/menuItemSimpleUsage.component';
import { MenuNoMarkersShowcase } from '../components/menu/menuNoMarkers.component';
import { MenuSimpleUsageShowcase } from '../components/menu/menuSimpleUsage.component';
import { MenuThemingShowcase } from '../components/menu/menuTheming.component';
import { ModalSimpleUsageShowcase } from '../components/modal/modalSimpleUsage.component';
import { ModalWithBackdropShowcase } from '../components/modal/modalWithBackdrop.component';
import { OverflowMenuAccessoriesShowcase } from '../components/overflowMenu/overflowMenuAccessories.component';
import { OverflowMenuFullWidthShowcase } from '../components/overflowMenu/overflowMenuFullWidth.component';
import { OverflowMenuNoMarkersShowcase } from '../components/overflowMenu/overflowMenuNoMarkers.component';
import { OverflowMenuPlacementShowcase } from '../components/overflowMenu/overflowMenuPlacement.component';
import { OverflowMenuSimpleUsageShowcase } from '../components/overflowMenu/overflowMenuSimpleUsage.component';
import { OverflowMenuStyledBackdropShowcase } from '../components/overflowMenu/overflowMenuStyledBackdrop.component';
import { OverflowMenuWithDisabledItemsShowcase } from '../components/overflowMenu/overflowMenuWithDisabledItems.component';
import { OverflowMenuWithoutDividerShowcase } from '../components/overflowMenu/overflowMenuWithoutDivider.component';
import { PopoverFullWidthShowcase } from '../components/popover/popoverFullWidth.component';
import { PopoverPlacementShowcase } from '../components/popover/popoverPlacement.component';
import { PopoverSimpleUsageShowcase } from '../components/popover/popoverSimpleUsage.component';
import { PopoverStyledBackdropShowcase } from '../components/popover/popoverStyledBackdrop.component';
import { RadioSimpleUsageShowcase } from '../components/radio/radioSimpleUsage.component';
import { RadioStatesShowcase } from '../components/radio/radioStates.component';
import { RadioStatusShowcase } from '../components/radio/radioStatus.component';
import { RadioThemingShowcase } from '../components/radio/radioTheming.component';
import { RadioGroupSimpleUsageShowcase } from '../components/radioGroup/radioGroupSimpleUsage.component';
import { SelectAccessoriesShowcase } from '../components/select/selectAccessories.component';
import { SelectDisabledOptionsShowcase } from '../components/select/selectDisabledOptions.component';
import { SelectDisplayValueShowcase } from '../components/select/selectDisplayValue.component';
import { SelectItemSimpleUsageShowcase } from '../components/select/selectItemSimpleUsage.component';
import { SelectMultiSelectShowcase } from '../components/select/selectMultiSelect.component';
import { SelectSimpleUsageShowcase } from '../components/select/selectSimpleUsage.component';
import { SelectSizeShowcase } from '../components/select/selectSize.component';
import { SelectStatesShowcase } from '../components/select/selectStates.component';
import { SelectStatusShowcase } from '../components/select/selectStatus.component';
import { SelectThemingShowcase } from '../components/select/selectTheming.component';
import { SelectWithGroupsShowcase } from '../components/select/selectWithGroups.component';
import { SpinnerDataLoadingShowcase } from '../components/spinner/spinnerDataLoading.component';
import { SpinnerSimpleUsageShowcase } from '../components/spinner/spinnerSimpleUsage.component';
import { SpinnerSizesShowcase } from '../components/spinner/spinnerSizes.component';
import { SpinnerStatusesShowcase } from '../components/spinner/spinnerStatuses.component';
import { SpinnerThemingShowcase } from '../components/spinner/spinnerTheming.component';
import { StyledComponentSimpleUsageShowcase } from '../components/styled/styledComponentSimpleUsage.component';
import { StyledComponentStatesShowcase } from '../components/styled/styledComponentStates.component';
import { StyledComponentVariantsShowcase } from '../components/styled/styledComponentVariants.component';
import { TabBarAccessoriesShowcase } from '../components/tab/tabBarAccessories.component';
import { TabBarSimpleUsageShowcase } from '../components/tab/tabBarSimpleUsage.component';
import { TabSimpleUsageShowcase } from '../components/tab/tabSimpleUsage.component';
import { TabThemingShowcase } from '../components/tab/tabTheming.component';
import { TabViewLazyLoadingShowcase } from '../components/tab/tabViewLazyLoading.component';
import { TabViewSimpleUsageShowcase } from '../components/tab/tabViewSimpleUsage.component';
import { TextAppearancesShowcase } from '../components/text/textAppearances.component';
import { TextCategoriesShowcase } from '../components/text/textCategories.component';
import { TextStatusesShowcase } from '../components/text/textStatuses.component';
import { ThemeProviderSimpleUsageShowcase } from '../components/themeProvider/themeProviderSimpleUsage.component';
import { ToggleSimpleUsageShowcase } from '../components/toggle/toggleSimpleUsage.component';
import { ToggleStatesShowcase } from '../components/toggle/toggleStates.component';
import { ToggleStatusShowcase } from '../components/toggle/toggleStatus.component';
import { ToggleThemingShowcase } from '../components/toggle/toggleTheming.component';
import { TooltipAccessoriesShowcase } from '../components/tooltip/tooltipAccessories.component';
import { TooltipPlacementShowcase } from '../components/tooltip/tooltipPlacement.component';
import { TooltipSimpleUsageShowcase } from '../components/tooltip/tooltipSimpleUsage.component';
import { TooltipStyledBackdropShowcase } from '../components/tooltip/tooltipStyledBackdrop.component';
import { TopNavigationAccessoriesShowcase } from '../components/topNavigation/topNavigationAccessories.component';
import { TopNavigationActionSimpleUsageShowcase } from '../components/topNavigation/topNavigationActionSimpleUsage.component';
import { TopNavigationDividerShowcase } from '../components/topNavigation/topNavigationDivider.component';
import { TopNavigationImageTitleShowcase } from '../components/topNavigation/topNavigationImageTitle.component';
import { TopNavigationSimpleUsageShowcase } from '../components/topNavigation/topNavigationSimpleUsage.component';
import { UseStyleSheetSimpleUsageShowcase } from '../components/useStyleSheet/useStyleSheetSimpleUsage.component';
import { UseThemeSimpleUsageShowcase } from '../components/useTheme/useThemeSimpleUsage.component';
import { ViewPagerLazyLoadingShowcase } from '../components/viewPager/viewPagerLazyLoading.component';
import { ViewPagerSimpleUsageShowcase } from '../components/viewPager/viewPagerSimpleUsage.component';
import { WithStylesSimpleUsageShowcase } from '../components/withStyles/withStylesSimpleUsage.component';

const routes = {
  AutocompleteAccessories: () => ShowcaseIFrame(AutocompleteAccessoriesShowcase, 'AutocompleteAccessories'),
  AutocompleteAsync: () => ShowcaseIFrame(AutocompleteAsyncShowcase, 'AutocompleteAsync'),
  AutocompleteHandleKeyboard: () => ShowcaseIFrame(AutocompleteHandleKeyboardShowcase, 'AutocompleteHandleKeyboard'),
  AutocompleteSimpleUsage: () => ShowcaseIFrame(AutocompleteSimpleUsageShowcase, 'AutocompleteSimpleUsage'),
  AvatarShape: () => ShowcaseIFrame(AvatarShapeShowcase, 'AvatarShape'),
  AvatarSimpleUsage: () => ShowcaseIFrame(AvatarSimpleUsageShowcase, 'AvatarSimpleUsage'),
  AvatarSize: () => ShowcaseIFrame(AvatarSizeShowcase, 'AvatarSize'),
  BottomNavigationAccessories: () => ShowcaseIFrame(BottomNavigationAccessoriesShowcase, 'BottomNavigationAccessories'),
  BottomNavigationSimpleUsage: () => ShowcaseIFrame(BottomNavigationSimpleUsageShowcase, 'BottomNavigationSimpleUsage'),
  BottomNavigationTabSimpleUsage: () => ShowcaseIFrame(BottomNavigationTabSimpleUsageShowcase, 'BottomNavigationTabSimpleUsage'),
  BottomNavigationTabTheming: () => ShowcaseThemingIFrame(BottomNavigationTabThemingShowcase, 'BottomNavigationTabTheming'),
  BottomNavigationWithoutIndicator: () => ShowcaseIFrame(BottomNavigationWithoutIndicatorShowcase, 'BottomNavigationWithoutIndicator'),
  ButtonAccessories: () => ShowcaseIFrame(ButtonAccessoriesShowcase, 'ButtonAccessories'),
  ButtonAppearances: () => ShowcaseIFrame(ButtonAppearancesShowcase, 'ButtonAppearances'),
  ButtonGhost: () => ShowcaseIFrame(ButtonGhostShowcase, 'ButtonGhost'),
  ButtonOutline: () => ShowcaseIFrame(ButtonOutlineShowcase, 'ButtonOutline'),
  ButtonSimpleUsage: () => ShowcaseIFrame(ButtonSimpleUsageShowcase, 'ButtonSimpleUsage'),
  ButtonSize: () => ShowcaseIFrame(ButtonSizeShowcase, 'ButtonSize'),
  ButtonStates: () => ShowcaseIFrame(ButtonStatesShowcase, 'ButtonStates'),
  ButtonStatus: () => ShowcaseIFrame(ButtonStatusShowcase, 'ButtonStatus'),
  ButtonTheming: () => ShowcaseThemingIFrame(ButtonThemingShowcase, 'ButtonTheming'),
  ButtonGroupAppearance: () => ShowcaseIFrame(ButtonGroupAppearanceShowcase, 'ButtonGroupAppearance'),
  ButtonGroupOutline: () => ShowcaseIFrame(ButtonGroupOutlineShowcase, 'ButtonGroupOutline'),
  ButtonGroupSimpleUsage: () => ShowcaseIFrame(ButtonGroupSimpleUsageShowcase, 'ButtonGroupSimpleUsage'),
  ButtonGroupSize: () => ShowcaseIFrame(ButtonGroupSizeShowcase, 'ButtonGroupSize'),
  ButtonGroupStatus: () => ShowcaseIFrame(ButtonGroupStatusShowcase, 'ButtonGroupStatus'),
  ButtonGroupWithIcons: () => ShowcaseIFrame(ButtonGroupWithIconsShowcase, 'ButtonGroupWithIcons'),
  CalendarCustomDay: () => ShowcaseIFrame(CalendarCustomDayShowcase, 'CalendarCustomDay'),
  CalendarFilters: () => ShowcaseIFrame(CalendarFiltersShowcase, 'CalendarFilters'),
  CalendarLocaleSettings: () => ShowcaseIFrame(CalendarLocaleSettingsShowcase, 'CalendarLocaleSettings'),
  CalendarMoment: () => ShowcaseIFrame(CalendarMomentShowcase, 'CalendarMoment'),
  CalendarSimpleUsage: () => ShowcaseIFrame(CalendarSimpleUsageShowcase, 'CalendarSimpleUsage'),
  CalendarTheming: () => ShowcaseThemingIFrame(CalendarThemingShowcase, 'CalendarTheming'),
  RangeCalendarSimpleUsage: () => ShowcaseIFrame(RangeCalendarSimpleUsageShowcase, 'RangeCalendarSimpleUsage'),
  CardAccessories: () => ShowcaseIFrame(CardAccessoriesShowcase, 'CardAccessories'),
  CardSimpleUsage: () => ShowcaseIFrame(CardSimpleUsageShowcase, 'CardSimpleUsage'),
  CardStatuses: () => ShowcaseIFrame(CardStatusesShowcase, 'CardStatuses'),
  CheckboxIndeterminate: () => ShowcaseIFrame(CheckboxIndeterminateShowcase, 'CheckboxIndeterminate'),
  CheckboxSimpleUsage: () => ShowcaseIFrame(CheckboxSimpleUsageShowcase, 'CheckboxSimpleUsage'),
  CheckboxStates: () => ShowcaseIFrame(CheckboxStatesShowcase, 'CheckboxStates'),
  CheckboxStatus: () => ShowcaseIFrame(CheckboxStatusShowcase, 'CheckboxStatus'),
  CheckboxTheming: () => ShowcaseThemingIFrame(CheckboxThemingShowcase, 'CheckboxTheming'),
  DatepickerAccessories: () => ShowcaseIFrame(DatepickerAccessoriesShowcase, 'DatepickerAccessories'),
  DatepickerCustomDay: () => ShowcaseIFrame(DatepickerCustomDayShowcase, 'DatepickerCustomDay'),
  DatepickerFilters: () => ShowcaseIFrame(DatepickerFiltersShowcase, 'DatepickerFilters'),
  DatepickerLocaleSettings: () => ShowcaseIFrame(DatepickerLocaleSettingsShowcase, 'DatepickerLocaleSettings'),
  DatepickerMoment: () => ShowcaseIFrame(DatepickerMomentShowcase, 'DatepickerMoment'),
  DatepickerSimpleUsage: () => ShowcaseIFrame(DatepickerSimpleUsageShowcase, 'DatepickerSimpleUsage'),
  DatepickerSize: () => ShowcaseIFrame(DatepickerSizeShowcase, 'DatepickerSize'),
  DatepickerStatus: () => ShowcaseIFrame(DatepickerStatusShowcase, 'DatepickerStatus'),
  DatepickerTheming: () => ShowcaseThemingIFrame(DatepickerThemingShowcase, 'DatepickerTheming'),
  RangeDatepickerSimpleUsage: () => ShowcaseIFrame(RangeDatepickerSimpleUsageShowcase, 'RangeDatepickerSimpleUsage'),
  DrawerAccessories: () => ShowcaseIFrame(DrawerAccessoriesShowcase, 'DrawerAccessories'),
  DrawerGroups: () => ShowcaseIFrame(DrawerGroupsShowcase, 'DrawerGroups'),
  DrawerItemSimpleUsage: () => ShowcaseIFrame(DrawerItemSimpleUsageShowcase, 'DrawerItemSimpleUsage'),
  DrawerNoMarkers: () => ShowcaseIFrame(DrawerNoMarkersShowcase, 'DrawerNoMarkers'),
  DrawerSimpleUsage: () => ShowcaseIFrame(DrawerSimpleUsageShowcase, 'DrawerSimpleUsage'),
  DrawerTheming: () => ShowcaseThemingIFrame(DrawerThemingShowcase, 'DrawerTheming'),
  IconAnimation: () => ShowcaseIFrame(IconAnimationShowcase, 'IconAnimation'),
  IconSimpleUsage: () => ShowcaseIFrame(IconSimpleUsageShowcase, 'IconSimpleUsage'),
  IconTheming: () => ShowcaseThemingIFrame(IconThemingShowcase, 'IconTheming'),
  IconWithinComponents: () => ShowcaseIFrame(IconWithinComponentsShowcase, 'IconWithinComponents'),
  InputAccessories: () => ShowcaseIFrame(InputAccessoriesShowcase, 'InputAccessories'),
  InputSimpleUsage: () => ShowcaseIFrame(InputSimpleUsageShowcase, 'InputSimpleUsage'),
  InputSize: () => ShowcaseIFrame(InputSizeShowcase, 'InputSize'),
  InputStates: () => ShowcaseIFrame(InputStatesShowcase, 'InputStates'),
  InputStatus: () => ShowcaseIFrame(InputStatusShowcase, 'InputStatus'),
  InputTheming: () => ShowcaseThemingIFrame(InputThemingShowcase, 'InputTheming'),
  LayoutLevel: () => ShowcaseIFrame(LayoutLevelShowcase, 'LayoutLevel'),
  ListAccessories: () => ShowcaseIFrame(ListAccessoriesShowcase, 'ListAccessories'),
  ListCustomItem: () => ShowcaseIFrame(ListCustomItemShowcase, 'ListCustomItem'),
  ListDividers: () => ShowcaseIFrame(ListDividersShowcase, 'ListDividers'),
  ListItemSimpleUsage: () => ShowcaseIFrame(ListItemSimpleUsageShowcase, 'ListItemSimpleUsage'),
  ListSimpleUsage: () => ShowcaseIFrame(ListSimpleUsageShowcase, 'ListSimpleUsage'),
  MenuAccessories: () => ShowcaseIFrame(MenuAccessoriesShowcase, 'MenuAccessories'),
  MenuDisabledOptions: () => ShowcaseIFrame(MenuDisabledOptionsShowcase, 'MenuDisabledOptions'),
  MenuGroups: () => ShowcaseIFrame(MenuGroupsShowcase, 'MenuGroups'),
  MenuItemSimpleUsage: () => ShowcaseIFrame(MenuItemSimpleUsageShowcase, 'MenuItemSimpleUsage'),
  MenuNoMarkers: () => ShowcaseIFrame(MenuNoMarkersShowcase, 'MenuNoMarkers'),
  MenuSimpleUsage: () => ShowcaseIFrame(MenuSimpleUsageShowcase, 'MenuSimpleUsage'),
  MenuTheming: () => ShowcaseThemingIFrame(MenuThemingShowcase, 'MenuTheming'),
  ModalSimpleUsage: () => ShowcaseIFrame(ModalSimpleUsageShowcase, 'ModalSimpleUsage'),
  ModalWithBackdrop: () => ShowcaseIFrame(ModalWithBackdropShowcase, 'ModalWithBackdrop'),
  OverflowMenuAccessories: () => ShowcaseIFrame(OverflowMenuAccessoriesShowcase, 'OverflowMenuAccessories'),
  OverflowMenuFullWidth: () => ShowcaseIFrame(OverflowMenuFullWidthShowcase, 'OverflowMenuFullWidth'),
  OverflowMenuNoMarkers: () => ShowcaseIFrame(OverflowMenuNoMarkersShowcase, 'OverflowMenuNoMarkers'),
  OverflowMenuPlacement: () => ShowcaseIFrame(OverflowMenuPlacementShowcase, 'OverflowMenuPlacement'),
  OverflowMenuSimpleUsage: () => ShowcaseIFrame(OverflowMenuSimpleUsageShowcase, 'OverflowMenuSimpleUsage'),
  OverflowMenuStyledBackdrop: () => ShowcaseIFrame(OverflowMenuStyledBackdropShowcase, 'OverflowMenuStyledBackdrop'),
  OverflowMenuWithDisabledItems: () => ShowcaseIFrame(OverflowMenuWithDisabledItemsShowcase, 'OverflowMenuWithDisabledItems'),
  OverflowMenuWithoutDivider: () => ShowcaseIFrame(OverflowMenuWithoutDividerShowcase, 'OverflowMenuWithoutDivider'),
  PopoverFullWidth: () => ShowcaseIFrame(PopoverFullWidthShowcase, 'PopoverFullWidth'),
  PopoverPlacement: () => ShowcaseIFrame(PopoverPlacementShowcase, 'PopoverPlacement'),
  PopoverSimpleUsage: () => ShowcaseIFrame(PopoverSimpleUsageShowcase, 'PopoverSimpleUsage'),
  PopoverStyledBackdrop: () => ShowcaseIFrame(PopoverStyledBackdropShowcase, 'PopoverStyledBackdrop'),
  RadioSimpleUsage: () => ShowcaseIFrame(RadioSimpleUsageShowcase, 'RadioSimpleUsage'),
  RadioStates: () => ShowcaseIFrame(RadioStatesShowcase, 'RadioStates'),
  RadioStatus: () => ShowcaseIFrame(RadioStatusShowcase, 'RadioStatus'),
  RadioTheming: () => ShowcaseThemingIFrame(RadioThemingShowcase, 'RadioTheming'),
  RadioGroupSimpleUsage: () => ShowcaseIFrame(RadioGroupSimpleUsageShowcase, 'RadioGroupSimpleUsage'),
  SelectAccessories: () => ShowcaseIFrame(SelectAccessoriesShowcase, 'SelectAccessories'),
  SelectDisabledOptions: () => ShowcaseIFrame(SelectDisabledOptionsShowcase, 'SelectDisabledOptions'),
  SelectDisplayValue: () => ShowcaseIFrame(SelectDisplayValueShowcase, 'SelectDisplayValue'),
  SelectItemSimpleUsage: () => ShowcaseIFrame(SelectItemSimpleUsageShowcase, 'SelectItemSimpleUsage'),
  SelectMultiSelect: () => ShowcaseIFrame(SelectMultiSelectShowcase, 'SelectMultiSelect'),
  SelectSimpleUsage: () => ShowcaseIFrame(SelectSimpleUsageShowcase, 'SelectSimpleUsage'),
  SelectSize: () => ShowcaseIFrame(SelectSizeShowcase, 'SelectSize'),
  SelectStates: () => ShowcaseIFrame(SelectStatesShowcase, 'SelectStates'),
  SelectStatus: () => ShowcaseIFrame(SelectStatusShowcase, 'SelectStatus'),
  SelectTheming: () => ShowcaseThemingIFrame(SelectThemingShowcase, 'SelectTheming'),
  SelectWithGroups: () => ShowcaseIFrame(SelectWithGroupsShowcase, 'SelectWithGroups'),
  SpinnerDataLoading: () => ShowcaseIFrame(SpinnerDataLoadingShowcase, 'SpinnerDataLoading'),
  SpinnerSimpleUsage: () => ShowcaseIFrame(SpinnerSimpleUsageShowcase, 'SpinnerSimpleUsage'),
  SpinnerSizes: () => ShowcaseIFrame(SpinnerSizesShowcase, 'SpinnerSizes'),
  SpinnerStatuses: () => ShowcaseIFrame(SpinnerStatusesShowcase, 'SpinnerStatuses'),
  SpinnerTheming: () => ShowcaseThemingIFrame(SpinnerThemingShowcase, 'SpinnerTheming'),
  StyledComponentSimpleUsage: () => ShowcaseIFrame(StyledComponentSimpleUsageShowcase, 'StyledComponentSimpleUsage'),
  StyledComponentStates: () => ShowcaseIFrame(StyledComponentStatesShowcase, 'StyledComponentStates'),
  StyledComponentVariants: () => ShowcaseIFrame(StyledComponentVariantsShowcase, 'StyledComponentVariants'),
  TabBarAccessories: () => ShowcaseIFrame(TabBarAccessoriesShowcase, 'TabBarAccessories'),
  TabBarSimpleUsage: () => ShowcaseIFrame(TabBarSimpleUsageShowcase, 'TabBarSimpleUsage'),
  TabSimpleUsage: () => ShowcaseIFrame(TabSimpleUsageShowcase, 'TabSimpleUsage'),
  TabTheming: () => ShowcaseThemingIFrame(TabThemingShowcase, 'TabTheming'),
  TabViewLazyLoading: () => ShowcaseIFrame(TabViewLazyLoadingShowcase, 'TabViewLazyLoading'),
  TabViewSimpleUsage: () => ShowcaseIFrame(TabViewSimpleUsageShowcase, 'TabViewSimpleUsage'),
  TextAppearances: () => ShowcaseIFrame(TextAppearancesShowcase, 'TextAppearances'),
  TextCategories: () => ShowcaseIFrame(TextCategoriesShowcase, 'TextCategories'),
  TextStatuses: () => ShowcaseIFrame(TextStatusesShowcase, 'TextStatuses'),
  ThemeProviderSimpleUsage: () => ShowcaseIFrame(ThemeProviderSimpleUsageShowcase, 'ThemeProviderSimpleUsage'),
  ToggleSimpleUsage: () => ShowcaseIFrame(ToggleSimpleUsageShowcase, 'ToggleSimpleUsage'),
  ToggleStates: () => ShowcaseIFrame(ToggleStatesShowcase, 'ToggleStates'),
  ToggleStatus: () => ShowcaseIFrame(ToggleStatusShowcase, 'ToggleStatus'),
  ToggleTheming: () => ShowcaseThemingIFrame(ToggleThemingShowcase, 'ToggleTheming'),
  TooltipAccessories: () => ShowcaseIFrame(TooltipAccessoriesShowcase, 'TooltipAccessories'),
  TooltipPlacement: () => ShowcaseIFrame(TooltipPlacementShowcase, 'TooltipPlacement'),
  TooltipSimpleUsage: () => ShowcaseIFrame(TooltipSimpleUsageShowcase, 'TooltipSimpleUsage'),
  TooltipStyledBackdrop: () => ShowcaseIFrame(TooltipStyledBackdropShowcase, 'TooltipStyledBackdrop'),
  TopNavigationAccessories: () => ShowcaseIFrame(TopNavigationAccessoriesShowcase, 'TopNavigationAccessories'),
  TopNavigationActionSimpleUsage: () => ShowcaseIFrame(TopNavigationActionSimpleUsageShowcase, 'TopNavigationActionSimpleUsage'),
  TopNavigationDivider: () => ShowcaseIFrame(TopNavigationDividerShowcase, 'TopNavigationDivider'),
  TopNavigationImageTitle: () => ShowcaseIFrame(TopNavigationImageTitleShowcase, 'TopNavigationImageTitle'),
  TopNavigationSimpleUsage: () => ShowcaseIFrame(TopNavigationSimpleUsageShowcase, 'TopNavigationSimpleUsage'),
  UseStyleSheetSimpleUsage: () => ShowcaseIFrame(UseStyleSheetSimpleUsageShowcase, 'UseStyleSheetSimpleUsage'),
  UseThemeSimpleUsage: () => ShowcaseIFrame(UseThemeSimpleUsageShowcase, 'UseThemeSimpleUsage'),
  ViewPagerLazyLoading: () => ShowcaseIFrame(ViewPagerLazyLoadingShowcase, 'ViewPagerLazyLoading'),
  ViewPagerSimpleUsage: () => ShowcaseIFrame(ViewPagerSimpleUsageShowcase, 'ViewPagerSimpleUsage'),
  WithStylesSimpleUsage: () => ShowcaseIFrame(WithStylesSimpleUsageShowcase, 'WithStylesSimpleUsage')
};

const AppStack = createStackNavigator(routes, { headerMode: 'none' });
export const AppNavigator = createBrowserApp(AppStack, { history: 'hash' });