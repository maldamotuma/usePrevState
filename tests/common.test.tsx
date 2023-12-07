import { renderHook } from '@testing-library/react'
import { usePrevState } from '../src/index'

import 'jest-canvas-mock'


describe('use previous state', () => {
    it('renders without crashing', () => {
        const { result } = renderHook(() => usePrevState("current"))
        expect(result.current).toBe(null)
    })
})