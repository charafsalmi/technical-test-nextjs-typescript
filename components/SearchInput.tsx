import React from "react";
import { SearchInputProps } from "../interfaces/SearchInputProps";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const SearchInput = ({ search, onChange }: SearchInputProps) => (
  <div className="flex items-center space-x-2">
    <Label htmlFor="search">Search</Label>
    <Input id="search" type="text" value={search} onChange={(e) => onChange(e.target.value)} placeholder="Search by name" />
  </div>
);

export default SearchInput;
