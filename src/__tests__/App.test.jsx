import { describe, expect, it } from "vitest";
/**
* @vitest-environment jsdom
*/
import { render, screen } from '@testing-library/react';
import * as React from 'react';

import App from '../App';

describe('App', () => {
    it('should render correctly', () => {
        render(<App />)

        screen.getByText("Hello Vite + React!")
    })
})