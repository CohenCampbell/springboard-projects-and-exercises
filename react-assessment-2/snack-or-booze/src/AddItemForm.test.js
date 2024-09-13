import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import AddItemForm from "./AddItemForm";
import {beforeEach, describe, expect} from '@jest/globals';


  describe("Testing AddItemForm", () => {
    const mockItem = jest.fn();

    beforeEach(() => {
        render(<AddItemForm postItem={mockItem}/>);
    });

    test("", async () => {
        fireEvent.change(screen.getByLabelText('food'), { target: { checked: true } });
        fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Chips' } });
        fireEvent.change(screen.getByPlaceholderText('Description'), { target: { value: 'Crispy potato chips' } });
        fireEvent.change(screen.getByPlaceholderText('Recipe'), { target: { value: 'Slice potatoes and fry' } });
        fireEvent.change(screen.getByPlaceholderText('Serve'), { target: { value: 'In a bowl' } });
    
        fireEvent.click(screen.getByText("Add Item"));

        expect(mockItem).toHaveBeenCalledWith({
            type: 'snacks',
            name: 'Chips',
            description: 'Crispy potato chips',
            recipe: 'Slice potatoes and fry',
            serve: 'In a bowl'
          });
    });
  });