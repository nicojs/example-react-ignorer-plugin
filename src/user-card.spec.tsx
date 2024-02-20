import { describe, it } from 'vitest';
import { render, screen } from "@testing-library/react";
import { UserCard } from './user-card';

describe('user card', () => {

  it('should do stuff', async () => {
    render(<UserCard id="1" />);

    await screen.findByText("Leanne Graham");
  });
});
