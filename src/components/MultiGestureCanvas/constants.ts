import type {WithSpringConfig} from 'react-native-reanimated';
import type {ZoomRange} from './types';

// The spring config is used to determine the physics of the spring animation
// Details and a playground for testing different configs can be found at
// https://docs.swmansion.com/react-native-reanimated/docs/animations/withSpring
const SPRING_CONFIG: WithSpringConfig = {
    mass: 1,
    stiffness: 1000,
    damping: 500,
};

// The default zoom range within the user can pinch to zoom the content inside the canvas
const defaultZoomRange: Required<ZoomRange> = {
    min: 1,
    max: 20,
};

// The zoom scale bounce factors are used to determine the amount of bounce
// that is allowed when the user zooms more than the min or max zoom levels
const zoomScaleBounceFactors: Required<ZoomRange> = {
    min: 0.7,
    max: 1.5,
};

export {SPRING_CONFIG, defaultZoomRange, zoomScaleBounceFactors};
