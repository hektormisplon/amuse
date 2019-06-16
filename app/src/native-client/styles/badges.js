import Colors from './colors'

/**
 * Reusable atomic badge styling
 */
export const base = {
  alignItems: 'center',
  borderRadius: 50
}

export const selected = {
  backgroundColor: Colors.selected,
  fontWeight: 'bold'
}

export const unselected = {
  color: Colors.white,
  backgroundColor: Colors.unselected
}

export const badgeSelected = {
  ...base,
  ...selected
}

export const badgeUnselected = {
  ...base,
  ...unselected
}
