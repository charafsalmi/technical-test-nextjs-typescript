import React from "react";
import { PowerThresholdInputProps } from "../interfaces/PowerThresholdInputProps";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const PowerThresholdInput = ({ power, onChange }: PowerThresholdInputProps) => (
  <div className="flex items-center space-x-2">
    <Label htmlFor="power">Power threshold</Label>
    <Input id="power" type="text" value={power} onChange={(e) => onChange(e.target.value)} placeholder="Enter power threshold" />
  </div>
);

export default PowerThresholdInput;
