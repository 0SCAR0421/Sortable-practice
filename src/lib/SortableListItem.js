import React, { useRef } from 'react'

function SortableListItem({index, draggable, children, onDragStart, onDropItem, onClickItem}) {
  const itemRef = useRef(null)
  const onDragStartItem = (event) => {
    itemRef.current.classList.add('dragstart')
    event.dataTransfer.dropEffect = 'copyMove'
    event.dataTransfer.effectAllowed = 'copyMove'
    onDragStart(index)
  }
  const onDragEnd = (event) => {
    itemRef.current.classList.remove('dragstart')
    event.dataTransfer.dropEffect = 'copyMove'
    event.dataTransfer.effectAllowed = 'copyMove'
  }
  const onDragEnter = () => itemRef.current.classList.add('dragover')
  const onDragLeave = () => itemRef.current.classList.remove('dragover')
  const onDragOver = (e) => e.preventDefault()
  const onDrop = () => {
    itemRef.current.classList.remove('dragover')
    onDropItem(index)
  }
  const onClick = () => onClickItem(index)

  return (
    <li
      ref={itemRef}
      className="item"
      draggable={draggable ? draggable : false}
      onDragStart={onDragStartItem}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onClick={onClick}
    >
      {children}
    </li>
  )
}

export default SortableListItem