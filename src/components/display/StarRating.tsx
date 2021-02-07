import React from 'react'
import { Row } from '../layout/FlexBox'
import { Icon } from './Icon'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export type StarRatingProps = {
  rating: number
  max: number
}

export function StarRating(props: StarRatingProps) {
  const icons = []
  for (let i = 0; i < props.max; i++) {
    if (i < props.rating) icons.push(<Icon key={i} icon={AiFillStar} />)
    else icons.push(<Icon key={i} icon={AiOutlineStar} />)
  }

  return <Row>{icons}</Row>
}
