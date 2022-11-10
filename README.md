# CLC

This is a simple calculator using CSMParse to parse and evaluate mathematical expressions.

## DEL

The `DEL` button removes the last inserted _character_, rather than 
the last inserted _token_. Thus, inputting `cos(1)` and entering `DEL` will return `cos(1`.

## CLEAR

The `CLEAR` button resets all input.

## Operations

From an abstract algebra perspective, the operations ${/,}$ ${\times,}$ ${+,}$ and ${-}$ are functions, just as ${\sin,}$ ${\cos,}$ and ${\tan}$ are. Unfortunately, these operations came long before we found set theory, so we have inconsistency.

We use infix for some operations `a + b`. Prefix for others—`+n`.
Postfix elsewhere—`n+`. And strange hybrids abound—`+n+`.
This is a mess when it comes to parsing, and a full implementation of all the nuances of mathematical notation comes at the cost of efficiency.

As such, CLC only implements prefix and infix notations. Thus, ${\sqrt{x}}$ becomes ${\text{sqrt}(x),}$ and ${\tan x}$ becomes ${\tan(x).}$ When a traditionally prefix or hybrid operation is entered (e.g., ${\ln x}$ or ${\lvert x \rvert}$), the parser will return ${\text{f}(.}$ The parameter list _must be_ closed with a right parenthesis for evaluation to complete.


