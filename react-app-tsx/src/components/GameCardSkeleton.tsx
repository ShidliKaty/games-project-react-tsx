import {Card, CardBody, Skeleton, SkeletonText} from "@chakra-ui/react";

export const GameCardSkeleton = () => {
    return (
    <Card minWidth='240px' borderRadius={10} overflow="hidden">
        <Skeleton height='200px'/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
    )
}