"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CreateForm() {
  const [formData, setFormData] = useState({
    tokenName: "",
    ticker: "",
    floorAllocation: "",
    anchorAllocation: "",
    price: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend or perform other actions
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-[#111827] rounded-[6px] shadow-md mt-16">
      <div className="flex flex-col gap-2 text-left">
        <Label htmlFor="tokenName">Token Name</Label>
        <Input
          id="tokenName"
          name="tokenName"
          className="rounded-[8px]"
          value={formData.tokenName}
          onChange={handleChange}
          placeholder="Enter token name"
          required
        />
      </div>
      <div className="flex flex-col gap-2 text-left">
        <Label htmlFor="ticker">Ticker</Label>
        <Input
          id="ticker"
          name="ticker"
          className="rounded-[8px]"
          value={formData.ticker}
          onChange={handleChange}
          placeholder="Enter ticker"
          required
        />
      </div>
      <div className="flex flex-col gap-2 text-left">
        <Label htmlFor="floorAllocation">Floor Allocation (%)</Label>
        <Input
          id="floorAllocation"
          name="floorAllocation"
          type="number"
          className="rounded-[8px]"
          value={formData.floorAllocation}
          onChange={handleChange}
          placeholder="Enter floor allocation"
          min="0"
          max="100"
          required
        />
      </div>
      <div className="flex flex-col gap-2 text-left">
        <Label htmlFor="anchorAllocation">Anchor Allocation (%)</Label>
        <Input
          id="anchorAllocation"
          name="anchorAllocation"
          type="number"
          className="rounded-[8px]"
          value={formData.anchorAllocation}
          onChange={handleChange}
          placeholder="Enter anchor allocation"
          min="0"
          max="100"
          required
        />
      </div>
      <div className="flex flex-col gap-2 text-left">
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          name="price"
          type="number"
          className="rounded-[8px]"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
          min="0"
          step="0.01"
          required
        />
      </div>
      <Button type="submit" className="w-full rounded-[12px] font-bold">
        Submit
      </Button>
    </form>
  )
}