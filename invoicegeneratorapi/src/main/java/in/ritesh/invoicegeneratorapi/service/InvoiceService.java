package in.ritesh.invoicegeneratorapi.service;

import in.ritesh.invoicegeneratorapi.entity.Invoice;
import in.ritesh.invoicegeneratorapi.repository.InvoiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InvoiceService {

    private final InvoiceRepository repository;

    public Invoice saveInvoice(Invoice invoice) {
        return repository.save(invoice);
    }

    public List<Invoice> fetchInvoices(String clerkId) {
        return repository.findByClerkId(clerkId);
    }

    public void removeInvoice(String clerkId, String invoiceId) {
        Invoice existingInvoice = repository.findByClerkIdAndId(clerkId, invoiceId)
                .orElseThrow(() -> new RuntimeException("Invoice not found:" + invoiceId));
        repository.delete(existingInvoice);
    }
}
